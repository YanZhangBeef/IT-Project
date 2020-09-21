import React from "react";

import styles from "./EditableImage.module.css";

export default function EditableImage(props) {
  return (
    <div className={styles.thumbnail}>
      {props.thumbnailUrl && (
        <img
          className={`${styles.image} ${props.className}`}
          src={props.thumbnailUrl}
        />
      )}
      {props.isEditable && (
        <div
          className={
            styles.overlay +
            " " +
            props.className +
            " " +
            (!props.thumbnailUrl && styles.placeholder)
          }
        >
          <label
            htmlFor="editableimage-input"
            className={"m-auto " + props.uploadButtonClassName}
          >
            {props.uploadButtonText}
          </label>
          <input
            type="file"
            accept="image/jpeg, image/png, image/gif"
            id="editableimage-input"
            style={{ display: "none" }}
            onChange={(e) => props.handleUpload(e.target.files[0])}
          />
        </div>
      )}
    </div>
  );
}
