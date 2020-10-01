import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getFileType } from "../artefact/FileUtils";
import { Link } from "react-router-dom";
import {
  faPaperclip,
  faVideo,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./ProjectSearchCard.module.css";
const imageStyle = {
  objectFit: "cover",

  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
};
const nAttachments = (item) => {
  if (item.artefacts == null) return 0;
  return item.artefacts.length;
};

const nVideos = (item) => {
  //causing error when "a" is typed
  // if (item.artefacts == null) return 0;

  // return item.artefacts.filter(
  //   (artefact) => "video" === getFileType(artefact.fileName)
  // ).length;
  return 0;
};

const nComments = (item) => 0;
export default function ProjectSearchCard(props) {
  return (
    <div className={`${classes.sectionCard} shadow p-4 mt-5`}>
      <div className={`${classes.section} my-4`}>
        <div className={`${classes.sectionImage} mr-4`}>
          <img style={imageStyle} src={props.thumbnailUrl} alt="" />
        </div>
        <div className={classes.sectionContent}>
          <h5>{props.title}</h5>
          <p className={classes.sectionDescription}>{props.description}</p>
          <div className={`${classes.sectionFooter} mx-2`}>
            <div className={classes.sectionIcons}>
              <span className="mx-1">
                <FontAwesomeIcon icon={faPaperclip} /> {nAttachments(props)}
              </span>
              <span className="mx-1 ml-2">
                <FontAwesomeIcon icon={faVideo} /> {nVideos(props)}
              </span>
              <span className="mx-1">
                <FontAwesomeIcon icon={faComment} /> {nComments(props)}
              </span>
            </div>

            <div className={classes.sectionButtons}>
              <Link to={`/content/${props.contentId}`}>
                <button className="btn btn-primary">View project</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
