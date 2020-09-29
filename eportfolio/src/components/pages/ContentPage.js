import React from "react";
import { Link } from "react-router-dom";
import ArtefactSectionContainer from "../artefact/ArtefactSectionContainer";
import ProfileImage from "../profile/ProfileImage";
import Thumbnail from "../profile/Thumbnail";

import styles from "./ContentPage.module.css";

export default function ContentPage(props) {
  return (
    <div id="special" className="container mt-4">
      <div className="d-flex m-1 align-items-center">
        <h1>{props.title}</h1>
        {props.isEditable && (
          <Link to={`/editContent/${props.contentId}`} className="ml-auto">
            <button className="btn btn-primary">Edit</button>
          </Link>
        )}
      </div>
      <Link to={"/profile/" + props.userId}>
        <div className="d-flex align-items-center m-1 mb-3">
          <div className="mr-3">
            <ProfileImage
              thumbnailUrl={props.profilePictureUrl}
              height="3rem"
              width="3rem"
            />
          </div>
          <span className={styles.displayName}>{props.displayName}</span>
        </div>
      </Link>

      <Thumbnail
        isEditable={props.isEditable}
        handleUpload={props.handleUpload}
        thumbnailUrl={props.thumbnailUrl}
      />
      <p className={`${styles["content-text"]} m-1 my-5`}>
        {props.description}
      </p>
      <ArtefactSectionContainer
        isEditable={props.isEditable}
        artefactIds={props.artefacts}
        contentId={props.contentId}
      />
      <h2 className="m-1">Comments</h2>
      <div className="m-1 my-5">Be the first to comment.</div>
    </div>
  );
}
