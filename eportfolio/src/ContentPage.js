import React from 'react';

import './ContentPage.css';

export default function ContentPage(props) {
    return (
        <div id ="special" class="container mt-4">
            <div class="row m-1">
                <h1>{props.title}</h1>
            </div>
            <div class="row m-1 mb-3">
                <span>{`${props.firstName} ${props.lastName}`}</span>
            </div>
            
            
            <img class="content-image m-1" src="https://images.unsplash.com/photo-1563805042-7684c019e1cb"/>
            <p class="content-text m-1 my-5">
                {props.description}
            </p>
            <h2 class="m-1">Artefacts</h2>
            <div class="m-1 my-5">
                Nothing to see here
            </div>
            <h2 class="m-1">Comments</h2>
            <div class="m-1 my-5">
                Be the first to comment.
            </div>

        </div>
    )
}