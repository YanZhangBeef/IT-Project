import React from "react";
import EditableImage from "./EditableImage";

import styles from "./ProfileImage.module.css";

export default function ProfileImage(props) {
  return (
    <div className="mr-5">
      <EditableImage
        {...props}
        className={styles.image}
        uploadButtonText="Upload"
        uploadButtonClassName="btn btn-outline-primary"
      />
    </div>
  );
}
