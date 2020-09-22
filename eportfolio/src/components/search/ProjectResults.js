import React from "react";
import SectionCard from "./ProjectSearchCard";

const projectResults = (props) => (
  <div>
    {props.data.sections.map((section) => (
      <SectionCard key={section.sectionId} {...section} />
    ))}
  </div>
);

export default projectResults;
