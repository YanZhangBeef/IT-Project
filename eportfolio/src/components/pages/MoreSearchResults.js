import React from "react";
import { withRouter } from "react-router-dom";
import classes from "./Search.module.css";
import ProfileCard from "../profile/ProfileCard";
import SectionCard from "../search/ProjectSearchCard";

const MoreSearchResults = (props) => {
  if (props.history.location.state.results) {
    if (props.history.location.state.type === "people") {
      let message = `${props.history.location.state.results.length} people found`;
      return (
        <div className="container my-3">
          <h1 className={`${classes.title} mt-5`}>People</h1>
          <h3 className="my-4">{message}</h3>
          <div>
            {props.history.location.state.results.map(
              ({ objectID, ...user }) => (
                <ProfileCard key={objectID} {...user} />
              )
            )}
          </div>
        </div>
      );
    } else {
      let message = `${props.history.location.state.results.length} projects found`;
      return (
        <div className="container my-3">
          <h1 className={`${classes.title} mt-5`}>
            Projects and work experiences
          </h1>
          <h3 className="my-4">{message}</h3>

          <div>
            {props.history.location.state.results.map(
              ({ objectID, ...section }) => (
                <SectionCard key={section.objectID} {...section} />
              )
            )}
          </div>
        </div>
      );
    }
  } else {
    return <h1>Please use the search bar...</h1>;
  }
};

export default withRouter(MoreSearchResults);
