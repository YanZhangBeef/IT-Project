import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faVideo,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import "./SectionCard.css";
import { Link } from "react-router-dom";

export default function SectionCard(props) {
  return (
    <div className="section-card shadow p-4 mt-5">
      <h5>{props.title}</h5>
      {props.contents.map((item, index) => [
        index !== 0 ? <hr /> : null,

        <div key={item.contentId} className="section my-4">
          <div className="section-image mr-4"></div>
          <div className="section-content">
            <h5>{item.title}</h5>
            <p className="section-description">{item.description}</p>
            <div className="section-footer mx-2">
              <div className="section-icons">
                <span className="mx-1">
                  <FontAwesomeIcon icon={faPaperclip} /> 2
                </span>
                <span className="mx-1 ml-2">
                  <FontAwesomeIcon icon={faVideo} /> 1
                </span>
                <span className="mx-1">
                  <FontAwesomeIcon icon={faComment} /> 3
                </span>
              </div>
              <Link to={`/content/${item.contentId}`}>
                <button className="btn btn-primary">More</button>
              </Link>
            </div>
          </div>
        </div>,
      ])}
    </div>
  );
}
