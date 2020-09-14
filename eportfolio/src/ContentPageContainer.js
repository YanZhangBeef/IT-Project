import React, {useState, useEffect} from 'react';
import ContentPage from './ContentPage';
import {useParams} from 'react-router-dom';

import firebase from "firebase";

export default function ContentPageContainer(props) {
    const [contentData, setContentData] = useState({});
    
    const {contentId} = useParams();
    const db = firebase.firestore();
    
    const fetchContentData = async () => {
        try {
            const content = await db.collection("sectionContents").doc(contentId).get();
            const contentData = content.data();
            console.log(contentData);
            const user = await contentData.userRef.get();
            const userData = user.data();

            return Object.assign({}, contentData, userData);
        }
        catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchContentData().then((data) => setContentData(data));
    }, []);

    return (
        <ContentPage {...contentData}/>
    )
}