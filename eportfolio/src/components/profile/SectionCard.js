import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faVideo,
  faComment,
  faEdit,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import styles from "./SectionCard.module.css";
import SectionThumbnail from "./SectionThumbnail";
import { getFileType } from "../artefact/FileUtils";

export default function SectionCard(props) {
  const nAttachments = (item) => {
    if (item.artefacts == null) return 0;
    return item.artefacts.length;
  };

  const nVideos = (item) => {
    if (item.artefacts == null) return 0;
    return item.artefacts.filter(
      (artefact) => "video" === getFileType(artefact.fileName)
    ).length;
  };

  const nComments = (item) => 0;

  return (
    <div className={`${styles["section-card"]} shadow p-4 mt-5`}>
      <div className="d-flex align-items-center">
        <h5>{props.title}</h5>
        {props.isEditable && (
          <button
            className={`btn ml-auto mx-2 ${styles["edit-icon-button"]}`}
            onClick={() => props.createNewContent(props.sectionId)}
          >
            <FontAwesomeIcon icon={faPlusSquare} />
          </button>
        )}
      </div>
      {props.contents.map((item, index) => (
        <div key={item.contentId}>
          {index !== 0 && <hr />}

          <div className={`${styles.section} my-4`}>
            <div className={`${styles["section-image"]} mr-4`}>
              {props.squareThumbnail ? (
                <SectionThumbnail
                  thumbnailUrl={item.squareThumbnailUrl}
                  square={true}
                  isEditable={props.isEditable}
                  handleUpload={(file) => {
                    props.handleSquareThumbnailUpload(item.contentId, file);
                  }}
                />
              ) : (
                <SectionThumbnail thumbnailUrl={item.thumbnailUrl} />
              )}
            </div>
            <div className={`${styles["section-content"]}`}>
              <div className="d-flex align-items-center">
                <h5>{item.title}</h5>
                {props.isEditable && (
                  <Link
                    to={`/editContent/${item.contentId}`}
                    className="ml-auto mx-2 "
                  >
                    <button className={`btn ${styles["edit-icon-button"]}`}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </Link>
                )}
              </div>
              <p className={`${styles["section-description"]}`}>
                {item.description}
              </p>
              <div className={`${styles["section-footer"]} mx-2`}>
                <div className={`${styles["section-icons"]}`}>
                  <span className="mx-1">
                    <FontAwesomeIcon icon={faPaperclip} /> {nAttachments(item)}
                  </span>
                  <span className="mx-1 ml-2">
                    <FontAwesomeIcon icon={faVideo} /> {nVideos(item)}
                  </span>
                  <span className="mx-1">
                    <FontAwesomeIcon icon={faComment} /> {nComments(item)}
                  </span>
                </div>
                <Link to={`/content/${item.contentId}`}>
                  <button className="btn btn-primary">More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
