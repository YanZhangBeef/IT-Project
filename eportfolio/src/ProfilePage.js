import React from 'react';


import './ProfilePage.css'
import ProfileCard from './components/ProfileCard';
import SectionCard from './components/SectionCard';

export default function ProfilePage(props) {
    return (
        <div className="container my-5">

            <ProfileCard {...props} />
            {
                props.sections.map(section => 
                    <SectionCard key={section.sectionId} {...section} isEditable={props.isEditable}/>
                )
            }
            
        </div>
    );
}