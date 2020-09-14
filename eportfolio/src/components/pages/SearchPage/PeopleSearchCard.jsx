import React from "react";

import "./PeopleSearchCardStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faVideo } from "@fortawesome/free-solid-svg-icons";
const comment = <FontAwesomeIcon icon={faComment} />;
const video = <FontAwesomeIcon icon={faVideo} />;

const searchBox = () => (
  <div className="item">
    <div className="image-people"></div>

    <h1 className="Name">Jane Smith </h1>
    <div className="university">
      <p>
        The University of Melbourne
      </p>
    </div>
    <button className = "button-message" type = "button">Message</button>
    <button className = "button-more" type = "button">More</button>
    
    <hr></hr>
    <div className = "about">
        <p> I am a student at the university of Melbourne </p>
    </div>
    
  </div>
);

export default searchBox;
