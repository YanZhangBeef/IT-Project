import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperclip, faVideo, faComment} from '@fortawesome/free-solid-svg-icons';

import './ProfilePage.css'



export default function ProfilePage(props) {
    return (
        <div class="container mt-5">

            <div class="section-card shadow p-4 mt-5">
                <div class="profile my-2 mb-4">
                    <div class="profile-image mr-5">

                    </div>
                    <div class="profile-content">
                        <h1 class="profile-name">John Smith</h1>
                        <span class="profile-tagline">University of Melbourne</span>
                    </div>

                    <div class="profile-message ml-auto">
                        <button class="btn btn-primary">Message</button>

                    </div>
                    
                </div>
                <hr/>
                <p>I'm a student at the university of melbourne, majoring in engineering. I love robots!</p>

            </div>

            <div class="section-card shadow p-4 mt-5">
                <h5>Projects</h5>
                <div class="section my-4">
                    <div class="section-image mr-4">

                    </div>
                    <div class="section-content">
                        <h5>My awesome project</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, asdfls asdf asdfjsdlfkjas ljsldkfjasd</p>
                        <div class="section-footer mx-2">
                            <div class="section-icons">
                                <span class="mx-1"><FontAwesomeIcon icon={faPaperclip}/> 2</span>
                                <span class="mx-1 ml-2"><FontAwesomeIcon icon={faVideo}/> 1</span>
                                <span class="mx-1"><FontAwesomeIcon icon={faComment}/> 3</span>
                            </div>
                            <button class="btn btn-primary">More</button>
                        </div>
                    </div>
                    
                </div>
                <hr/>
                <h5>Test</h5>

            </div>
        </div>
    );
}