import React from "react";

import "./ProjectSearchCardStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faVideo } from "@fortawesome/free-solid-svg-icons";
const comment = <FontAwesomeIcon icon={faComment} />;
const video = <FontAwesomeIcon icon={faVideo} />;

const searchBox = () => (
  <div className="item">
    <div className="image"></div>

    <h1 className="Title">Automated robbot project </h1>
    <div className="content-box">
      <p calssName="content-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Neque viverra justo nec ultrices. Penatibus et magnis dis parturient montes nascetur...
      </p>
    </div>
    <div className="icons-comment">
      <p>{comment} 1</p>
    </div>
    <div className="icons-video">
      <p>{video} 1</p>
    </div>
  </div>
);

export default searchBox;
