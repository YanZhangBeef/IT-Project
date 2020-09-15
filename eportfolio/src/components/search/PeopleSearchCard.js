import React from "react";

import "./PeopleSearchCardStyles.css";

const searchBox = () => (
  <div className="item">
    <div className="image-people"></div>

    <h1 className="Name">Jane Smith </h1>
    <div className="university">
      <p>The University of Melbourne</p>
    </div>
    <button className="button-message" type="button">
      Message
    </button>
    <button className="button-more" type="button">
      More
    </button>

    <hr className="hline"></hr>
    <div className="about">
      <p> I am a student at the university of Melbourne </p>
    </div>
  </div>
);

export default searchBox;
