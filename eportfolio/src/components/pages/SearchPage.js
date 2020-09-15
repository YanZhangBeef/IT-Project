import React from "react";
import ProjectResults from "../search/ProjectResults";
import PeopleResults from "../search/PeopleResults";
import "./SearchPage.module.css";

import styles from "./Chat.module.css";

const search = () => (
  <div class={styles["search-container"]}>
    <h1>Projects</h1>

    <ProjectResults />
    <div className={styles.more}>
      <p>Load more projects</p>
      <hr></hr>
    </div>
    <h1>People</h1>

    <PeopleResults />
    <div className={styles.more}>
      <p>Load more people</p>
      <hr></hr>
    </div>
  </div>
);

export default search;
