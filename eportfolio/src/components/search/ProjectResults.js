import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionCard from "./ProjectSearchCard";
import sectionSearch from "../../algolia/sectionSearch.js";

const moreStyle = {
  color: "blue",
  textAlign: "center",
};

function ProjectResults(props) {
  const [sectionData, setSectionData] = useState({
    repos: null,
  });

  useEffect(() => {
    sectionSearch(props.query).then((res) => {
      setSectionData({ repos: res });
    });
  }, [props.query]);

  if (sectionData.repos == null) {
    return <div></div>;
  } else if (sectionData.repos.length === 0) {
    return (
      <div>
        <h1>No project found</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          {sectionData.repos
            .filter((section, idx) => idx < 3)
            .map(({ objectID, ...section }) => (
              <SectionCard key={objectID} contentId={objectID} {...section} />
            ))}
        </div>
        <div className="mt-4" style={moreStyle}>
          <Link
            to={{
              pathname: "/results",
              state: { results: sectionData.repos, type: "project" },
            }}
          >
            <p>Load more projects</p>{" "}
          </Link>
          <hr className="mt-2"></hr>
        </div>
      </div>
    );
  }
}

export default ProjectResults;
