import React from 'react';
import './ProfileCard.css';

import {EditableTextArea, EditableTextField} from './EditableTextArea';

export default function ProfileCard(props) {
    return (
        <div className="section-card shadow p-4 mt-5">
                <div className="profile my-2 mb-4">
                    <div className="profile-image mr-5">

                    </div>
                    <div className="profile-content">
                        <h1 className="profile-name">{props.displayName}</h1>
                        <EditableTextField isEditable={props.isEditable} text={props.tagline} handleSave={tagline => props.updateProfile({tagline})}/>
                    </div>

                    <div className="profile-message ml-auto">
                        <button className="btn btn-primary">Message</button>

                    </div>
                    
                </div>
                <hr/>
                <EditableTextArea isEditable={props.isEditable} text={props.about} handleSave={about => props.updateProfile({about})}/>
                

            </div>
    )
}