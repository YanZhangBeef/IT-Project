import React from "react";
import ProjectResults from "../search/ProjectResults";
import PeopleResults from "../search/PeopleResults";
import classes from "./Search.module.css";

const search = (props) => (
  <div class="container my-3">
    <h1 className={`${classes.title} mt-5`}>People</h1>
    <PeopleResults />
    <div className={`${classes.more} mt-4`}>
      <p>Load more projects</p>
      <hr className="mt-2"></hr>
    </div>
    <h1 className={`${classes.title} mt-5`}>Projects and experience</h1>
    <ProjectResults data={props} />
    <div className={`${classes.more} mt-4`}>
      <p>Load more people</p>
      <hr className="mt-2"></hr>
    </div>
  </div>
);

export default search;
