import React from "react";

import styles from "./ProjectSearchCardStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faVideo,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
const comment = <FontAwesomeIcon icon={faComment} />;
const video = <FontAwesomeIcon icon={faVideo} />;
const paperclip = <FontAwesomeIcon icon={faPaperclip} />;

const searchBox = () => (
  <div className={styles.item}>
    <div className={styles.image}></div>

    <h1 className={styles.Title}>Automated robbot project </h1>
    <div className={styles["content-box"]}>
      <p calssName={styles["content-text"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Neque viverra justo
        nec ultrices. Penatibus et magnis dis parturient montes nascetur...
      </p>
    </div>
    <div className={styles["search-icons-comment"]}>
      <p>{comment} 1</p>
    </div>
    <div className={styles["search-icons-video"]}>
      <p>{video} 1</p>
    </div>
    <div className={styles["search-icons-paperclip"]}>
      <p>{paperclip} 3</p>
    </div>
    <button className={styles["search-button"]} type="button">
      Message
    </button>
  </div>
);

export default searchBox;
