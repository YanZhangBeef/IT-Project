import React from 'react';

import './ProfileCard.css';
export default function ProfileCard(props) {
    return (
        <div class="section-card shadow p-4 mt-5">
                <div class="profile my-2 mb-4">
                    <div class="profile-image mr-5">

                    </div>
                    <div class="profile-content">
                        <h1 class="profile-name">{`${props.firstName} ${props.lastName}`}</h1>
                        <span class="profile-tagline">{props.tagline}</span>
                    </div>

                    <div class="profile-message ml-auto">
                        <button class="btn btn-primary">Message</button>

                    </div>
                    
                </div>
                <hr/>
                <p>{props.about}</p>

            </div>
    )
}