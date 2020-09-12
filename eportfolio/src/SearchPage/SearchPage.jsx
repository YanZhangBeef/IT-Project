import React from "react";
import ProjectResults from "./ProjectResults";
import PeopleResults from "./PeopleResults";
import "./Search.css";

const search = () => (
  <div class="container">
    <h1>Projects</h1>
    /* If projects found render else render 0 projects found */
    <ProjectResults />
    <div className ="more">
      <p>Load more projects</p>
      <hr></hr>
    </div>
    <h1>People</h1>
    /* If people found render else render 0 people found */
    <PeopleResults />
    <div className ="more">
      <p>Load more people</p>
      <hr></hr>
    </div>
  </div>
);

export default search;
