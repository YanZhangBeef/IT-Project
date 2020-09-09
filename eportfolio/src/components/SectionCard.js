import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faVideo,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import "./SectionCard.css";

export default function SectionCard(props) {
  return (
    <div class="section-card shadow p-4 mt-5">
      <h5>{props.title}</h5>
      {props.content.map((item, index) => [
        index !== 0 ? <hr /> : null,

        <div key={item.contentId} class="section my-4">
          <div class="section-image mr-4"></div>
          <div class="section-content">
            <h5>{item.title}</h5>
            <p class="section-description">{item.description}</p>
            <div class="section-footer mx-2">
              <div class="section-icons">
                <span class="mx-1">
                  <FontAwesomeIcon icon={faPaperclip} /> 2
                </span>
                <span class="mx-1 ml-2">
                  <FontAwesomeIcon icon={faVideo} /> 1
                </span>
                <span class="mx-1">
                  <FontAwesomeIcon icon={faComment} /> 3
                </span>
              </div>
              <button class="btn btn-primary">More</button>
            </div>
          </div>
        </div>,
      ])}
    </div>
  );
}
