import React from "react";
import EditableImage from "./EditableImage";

import styles from "./ProfileImage.module.css";

const DEFAULT_IMG =
  "https://firebasestorage.googleapis.com/v0/b/eportfolio-5head.appspot.com/o/2560.jpg?alt=media&token=bb438a60-0054-491d-859c-2f5143917432";
export default function ProfileImage(props) {
  const thumbnailUrl = props.thumbnailUrl ? props.thumbnailUrl : DEFAULT_IMG;
  return (
    <EditableImage
      {...props}
      thumbnailUrl={thumbnailUrl}
      style={{ height: props.height, width: props.width }}
      className={styles.image}
      uploadButtonText="Upload"
      uploadButtonClassName="btn btn-outline-primary"
    />
  );
}
