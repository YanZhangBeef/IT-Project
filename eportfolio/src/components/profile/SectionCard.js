import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faVideo,
  faComment,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import styles from "./SectionCard.module.css";
import Thumbnail from "./Thumbnail";
import SectionThumbnail from "./SectionThumbnail";

export default function SectionCard(props) {
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
              <SectionThumbnail thumbnailUrl={item.thumbnailUrl} />
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
                    <FontAwesomeIcon icon={faPaperclip} /> 2
                  </span>
                  <span className="mx-1 ml-2">
                    <FontAwesomeIcon icon={faVideo} /> 1
                  </span>
                  <span className="mx-1">
                    <FontAwesomeIcon icon={faComment} /> 3
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
