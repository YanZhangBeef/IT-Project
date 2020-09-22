import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faVideo,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./ProjectSearchCard.module.css";

export default function ProjectSearchCard(props) {
  return (
    <div className={`${classes.sectionCard} shadow p-4 mt-5`}>
      <h5>{props.title}</h5>

      {props.content
        .filter((item, idx) => idx < 1)
        .map((item, index) => [
          index !== 0 ? <hr /> : null,

          <div key={item.contentId} className={`${classes.section} my-4`}>
            <div className={`${classes.sectionImage} mr-4`}></div>
            <div className={classes.sectionContent}>
              <h5>{item.title}</h5>
              <p className={classes.sectionDescription}>{item.description}</p>
              <div className={`${classes.sectionFooter} mx-2`}>
                <div className={classes.sectionIcons}>
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

                <div className={classes.sectionButtons}>
                  <button className="btn btn-primary">More</button>
                  <span className="mx-1"></span>
                  <button className="btn btn-primary">Message</button>
                </div>
              </div>
            </div>
          </div>,
        ])}
    </div>
  );
}
