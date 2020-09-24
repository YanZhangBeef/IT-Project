import React, { useState, useEffect } from "react";
import ProjectResults from "../search/ProjectResults";
import PeopleResults from "../search/PeopleResults";
import classes from "./Search.module.css";

import { withRouter } from "react-router-dom";
const SearchPage = (props) => {
  const [query, setQuery] = useState([]);

  useEffect(() => {
    if (props.history.location.state) {
      setQuery(props.history.location.state);
    }
  }, [props.history.location.state]);

  if (query == "") {
    return <div>Show nothing</div>;
  } else {
    return (
      <div className="container my-3">
        <h1 className={`${classes.title} mt-5`}>People</h1>

        <PeopleResults query={query} />
        <div className={`${classes.more} mt-4`}>
          <p>Load more projects</p>
          <hr className="mt-2"></hr>
        </div>
      </div>
    );
  }
};

export default withRouter(SearchPage);
