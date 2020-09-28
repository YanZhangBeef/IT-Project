import React from "react";
import EditableImage from "./EditableImage";

import styles from "./Thumbnail.module.css";

export default function Thumbnail(props) {
  return (
    <div className="m-1">
      <EditableImage
        {...props}
        className={"border " + styles.image}
        uploadButtonText="Upload thumbnail"
        uploadButtonClassName="btn btn-primary"
      />
    </div>
  );
}
