import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import styles from "./SectionCard.module.css";

export function EditableTextArea(props) {
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setText(props.text);
  }, [props.text]);

  const handleCancel = () => {
    setText(props.text);
    setIsEditing(false);
  };

  const handleSave = () => {
    props.handleSave(text);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div>
        <textarea
          className="w-100 mb-2"
          placeholder="Enter text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="btn btn-success mr-2" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-primary" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    );
  }

  return (
    <p>
      {text}{" "}
      {props.isEditable && (
        <button
          className={`btn ${styles["edit-icon-button"]}`}
          onClick={() => setIsEditing(true)}
        >
          <FontAwesomeIcon icon={faEdit} />{" "}
        </button>
      )}
    </p>
  );
}

export function EditableTextField(props) {
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setText(props.text);
  }, [props.text]);

  const handleCancel = () => {
    setText(props.text);
    setIsEditing(false);
  };

  const handleSave = () => {
    props.handleSave(text);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div>
        <input
          className="mr-2 mt-2"
          type="text"
          placeholder="Enter text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="btn btn-success mr-2" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-primary" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    );
  }

  return (
    <span>
      {text}{" "}
      {props.isEditable && (
        <button
          className={`btn ${styles["edit-icon-button"]}`}
          onClick={() => setIsEditing(true)}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
      )}
    </span>
  );
}
