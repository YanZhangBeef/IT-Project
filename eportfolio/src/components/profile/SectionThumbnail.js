import React from "react";
import EditableImage from "./EditableImage";

import styles from "./SectionThumbnail.module.css";

export default function SectionThumbnail(props) {
  return (
    <EditableImage
      {...props}
      className={props.square ? styles.imageSquare : styles.image}
      uploadButtonText="Upload"
      uploadButtonClassName="btn btn-outline-primary"
    />
  );
}
