import React, {useState, useEffect} from 'react';
import ProfilePage from './ProfilePage';
import {useParams} from 'react-router-dom';

import firebase from "firebase";

export default function ProfilePageContainer(props) {
    const [profileData, setProfileData] = useState({sections: []});
    
    const {userId} = useParams();
    const db = firebase.firestore();
    
    const fetchProfileData = async () => {
        try {
            const user = await db.collection("users").doc(userId).get();
            const sections = await Promise.all(user.data().sections.map(fetchSection));
            console.log("sections ", sections);

            return Object.assign({}, user.data(), {sections: sections});
        }
        catch(e) {
            console.log(e);
        }
    }

    const fetchSection = async(sectionRef) => {
        const sections = await sectionRef.get();
        console.log(sections.data());
        const contents = await Promise.all(sections.data().contents.map(async contentRef => {
            const content = await contentRef.get();
            return Object.assign({}, content.data(), {contentId: contentRef.id});
        }));

        return Object.assign({}, sections.data(), {contents: contents, sectionId: sectionRef.id});
    }

    useEffect(() => {
        fetchProfileData().then((data) => setProfileData(data));
    }, []);

    return (
        <ProfilePage {...profileData}/>
    )
}