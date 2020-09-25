import React, { useState, useEffect } from "react";
import SectionCard from "./ProjectSearchCard";
import sectionSearch from "../../algolia/sectionSearch.js";

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
    return (
      <div>
        <h1>No profile found</h1>
      </div>
    );
  } else {
    console.log(sectionData.repos);
    return (
      <div>
        {sectionData.repos.map((section) => (
          <SectionCard key={section.objectID} {...section} />
        ))}
      </div>
    );
  }
}

export default ProjectResults;
