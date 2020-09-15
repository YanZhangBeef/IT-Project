import React, {useState, useEffect} from 'react';
import ContentPage from './ContentPage';
import EditContentPage from './EditContentPage';
import {useHistory, useParams} from 'react-router-dom';
import { deleteContent, fetchContent, updateContent } from './data/ProfileRepository';


export default function ContentPageContainer(props) {
    const [contentData, setContentData] = useState({});
    
    const {contentId} = useParams();
    const history = useHistory();


    const handleSave = (data) => {
        updateContent(contentId, data).then( () => {
            setContentData(Object.assign({}, contentData, data));
            history.push(`/content/${contentId}`);
        })
    }

    const handleDelete = () => {
        deleteContent(contentId).then(
            userId => history.push(`/profile/${userId}`)
        );
    }

    const handleCancel = () => {
        history.push(`/content/${contentId}`);
    }

    useEffect(() => {   
        fetchContent(contentId).then((data) => setContentData(data));
        console.log('fetching new content data');
        
    }, [contentId]);

    return (
        props.isEditing ? 
        <EditContentPage {...contentData} handleSave={handleSave} handleDelete={handleDelete} handleCancel={handleCancel} /> : 
        <ContentPage {...contentData} isEditable={true}/>
        
    )
}