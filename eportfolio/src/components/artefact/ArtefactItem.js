import React, { useState, useEffect } from "react";
import styles from "./ArtefactItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faFilePdf,
  faFileImage,
  faFileVideo,
} from "@fortawesome/free-solid-svg-icons";
import { getFileType } from "./FileUtils";
import { Link } from "react-router-dom";
import DeleteIcon from "./DeleteButton";

export default function ArtefactItem(props) {
  return (
    <div
      className={`d-flex px-3 mr-4 mb-4 align-items-center ${styles.artefactItem}`}
      onClick={() => window.open(props.fileUrl)}
    >
      <div className={`mr-4 ${styles.fileIcon}`}>
        <FileIcon fileName={props.fileName} />
      </div>
      <span className={styles.fileName}>{props.fileName}</span>
      {props.isEditable && (
        <div className="ml-auto">
          <DeleteIcon onDelete={() => props.handleDelete(props.artefactId)} />
        </div>
      )}
    </div>
  );
}

function FileIcon(props) {
  let icon = faFile;
  switch (getFileType(props.fileName)) {
    case "image":
      icon = faFileImage;
      break;
    case "video":
      icon = faFileVideo;
      break;
    case "pdf":
      icon = faFilePdf;
  }

  return <FontAwesomeIcon icon={icon} />;
}
