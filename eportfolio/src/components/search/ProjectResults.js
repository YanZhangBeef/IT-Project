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
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setSectionData({ loading: true });
    sectionSearch(props.query).then((res) => {
      setSectionData({ loading: false, repos: res });
    });
  }, [props.query]);

  if (sectionData.repos == null) {
    /* no profile found yet */
    return (
      <div>
        <h1>No profile found</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          {sectionData.repos
            .filter((section, idx) => idx < 3)
            .map(({ objectID, ...section }) => (
              <SectionCard key={section.objectID} {...section} />
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
          <hr className="mt-2"></hr>
        </div>
      </div>
    );
  }
}

export default ProjectResults;
