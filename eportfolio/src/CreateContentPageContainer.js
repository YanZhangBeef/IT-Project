import React, {useState, useEffect} from 'react';
import EditContentPage from './EditContentPage';
import {useHistory, useParams} from 'react-router-dom';
import { createContent, fetchProfile } from './data/ProfileRepository';


export default function CreateContentPageContainer(props) {
    const [profileData, setProfileData] = useState({});
    
    const {userId, sectionId} = useParams();
    const history = useHistory();


    const handleSave = (data) => {
        createContent(userId, sectionId, data).then( (contentId) => {
            //setContentData(Object.assign({}, contentData, data));
            history.push(`/content/${contentId}`);
        })
    }

    const handleCancel = () => {
        history.push(`/profile/${userId}`);
    }

    useEffect(() => {
        fetchProfile(userId).then((data) => setProfileData(data));
    }, [userId]);

    return (
        <EditContentPage {...profileData} handleSave={handleSave} handleCancel={handleCancel} isNewPage={true}/>    
    )
}