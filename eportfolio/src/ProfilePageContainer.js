import React, {useState, useEffect} from 'react';
import ProfilePage from './ProfilePage';
import {useParams} from 'react-router-dom';

import { fetchProfile, updateProfile } from './data/ProfileRepository';

export default function ProfilePageContainer(props) {
    const [profileData, setProfileData] = useState({sections: []});
    
    const {userId} = useParams();

    useEffect(() => {
        fetchProfile(userId).then((data) => setProfileData(data));
    }, [userId]);

    return (
        <ProfilePage {...profileData} isEditable={true} updateProfile={(data) => updateProfile(userId, data)}/>
    )
}