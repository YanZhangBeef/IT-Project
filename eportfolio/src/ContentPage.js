import React from 'react';

import './ContentPage.css';

export default function ContentPage(props) {
    return (
        <div id ="special" class="container mt-4">
            <div class="row m-1">
                <h1>My awesome project</h1>
            </div>
            <div class="row m-1 mb-3">
                <span>John Smith</span>
            </div>
            
            
            <img class="content-image m-1" src="https://images.unsplash.com/photo-1563805042-7684c019e1cb"/>
            <p class="content-text m-1 my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque viverra justo nec ultrices. Penatibus et magnis dis parturient montes nascetur. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Pulvinar proin gravida hendrerit lectus a. Arcu non odio euismod lacinia at. Gravida cum sociis natoque penatibus et magnis dis. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Elit at imperdiet dui accumsan sit amet nulla facilisi. Scelerisque felis imperdiet proin fermentum leo. Vehicula ipsum a arcu cursus. Euismod in pellentesque massa placerat. Nec nam aliquam sem et tortor consequat id porta. Sit amet risus nullam eget felis eget nunc lobortis mattis. Mi eget mauris pharetra et.
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