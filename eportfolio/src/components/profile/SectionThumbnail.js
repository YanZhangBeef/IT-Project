import React from "react";
import EditableImage from "./EditableImage";

import styles from "./SectionThumbnail.module.css";

export default function SectionThumbnail(props) {
  return (
    <EditableImage
      {...props}
      className={styles.image}
      uploadButtonText="Upload"
      uploadButtonClassName="btn btn-primary-outline"
    />
  );
}
