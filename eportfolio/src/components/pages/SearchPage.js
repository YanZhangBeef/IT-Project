import React from "react";
import ProjectResults from "../search/ProjectResults";
import PeopleResults from "../search/PeopleResults";
import "./SearchPage.css";

const search = () => (
  <div class="search-container">
    <h1>Projects</h1>

    <ProjectResults />
    <div className="more">
      <p>Load more projects</p>
      <hr></hr>
    </div>
    <h1>People</h1>

    <PeopleResults />
    <div className="more">
      <p>Load more people</p>
      <hr></hr>
    </div>
  </div>
);

export default search;
