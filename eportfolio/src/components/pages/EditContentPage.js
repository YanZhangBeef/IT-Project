import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArtefactSectionContainer from "../artefact/ArtefactSectionContainer";
import ProfileImage from "../profile/ProfileImage";
import Thumbnail from "../profile/Thumbnail";

import styles from "./ContentPage.module.css";

export default function EditContentPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(props.title);
    setDescription(props.description);
  }, [props.title, props.description]);

  return (
    <div id="special" className="container mt-4">
      <div className="d-flex m-1 mb-3 align-items-center">
        <input
          type="text"
          className={`form-control ${styles["edit-title"]}`}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="btn btn-success mr-2 ml-4"
          onClick={() => props.handleSave({ title, description })}
        >
          Save
        </button>
        <button className="btn btn-primary mr-2" onClick={props.handleCancel}>
          Cancel
        </button>

        {!props.isNewPage && (
          <button className="btn btn-danger mr-2" onClick={props.handleDelete}>
            Delete
          </button>
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
        isEditable={!props.isNewPage}
        handleUpload={props.handleUpload}
        thumbnailUrl={props.thumbnailUrl}
      />

      <textarea
        className={`form-control ${styles["edit-content-text"]} ${styles["content-text"]} m-1 my-5`}
        placeholder="Enter text here..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <ArtefactSectionContainer
        isEditable={true}
        artefactIds={props.artefacts}
        contentId={props.contentId}
      />
      <h2 className="m-1">Comments</h2>
      <div className="m-1 my-5">Be the first to comment.</div>
    </div>
  );
}
