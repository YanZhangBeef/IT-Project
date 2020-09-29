import React from "react";
import { v4 as uuid } from "uuid";

import styles from "./EditableImage.module.css";

export default function EditableImage(props) {
  const inputId = uuid();
  return (
    <div className={styles.thumbnail}>
      {props.thumbnailUrl && (
        <img
          style={props.style}
          className={`${styles.image} ${props.className}`}
          src={props.thumbnailUrl}
        />
      )}
      {props.isEditable && (
        <div
          style={props.style}
          className={
            styles.overlay +
            " " +
            props.className +
            " " +
            (!props.thumbnailUrl && styles.placeholder)
          }
        >
          <label
            htmlFor={inputId}
            className={"m-auto " + props.uploadButtonClassName}
          >
            {props.uploadButtonText}
          </label>
          <input
            type="file"
            accept="image/jpeg, image/png, image/gif"
            id={inputId}
            style={{ display: "none" }}
            onChange={(e) => {
              console.log("uploading");
              props.handleUpload(e.target.files[0]);
            }}
          />
        </div>
      )}
    </div>
  );
}
