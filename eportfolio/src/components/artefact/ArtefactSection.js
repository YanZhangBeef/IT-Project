import React, { useState, useEffect } from "react";
import ArtefactItem from "./ArtefactItem";
import styles from "./ArtefactSection.module.css";

export default function ArtefactSection(props) {
  return (
    <div className="m-1 my-5">
      <div className="d-flex">
        <h2 className="m-1 mb-2 mr-auto">Artefacts</h2>
        {props.isEditable && (
          <div>
            <label htmlFor="artefact-input" className="btn btn-primary">
              Upload file
            </label>
            <input
              type="file"
              id="artefact-input"
              style={{ display: "none" }}
              onChange={(e) => props.handleUpload(e.target.files[0])}
            />
          </div>
        )}
      </div>
      <div className="d-flex flex-wrap mt-5">
        {props.artefacts == null || props.artefacts.length === 0 ? (
          <div>Nothing to see here</div>
        ) : (
          props.artefacts.map((artefact) => (
            <ArtefactItem
              {...artefact}
              key={artefact.artefactId}
              isEditable={props.isEditable}
              handleDelete={props.handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}
