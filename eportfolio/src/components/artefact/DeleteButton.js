import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import styles from "./DeleteButton.module.css";

export default function DeleteIcon(props) {
  return (
    <button
      className={`btn ${styles.deleteButton}`}
      onClick={(e) => {
        e.stopPropagation();
        props.onDelete();
      }}
    >
      <FontAwesomeIcon icon={faTrash} />{" "}
    </button>
  );
}
