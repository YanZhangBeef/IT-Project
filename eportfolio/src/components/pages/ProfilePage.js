import React from "react";

import ProfileCard from "../profile/ProfileCard";
import SectionCard from "../profile/SectionCard";
import userSearch from "../../algolia/searchFunctions";
export default function ProfilePage(props) {
  let result = userSearch(props.temp);
  console.log("***" + result);
  return (
    <div className="container my-5">
      <ProfileCard {...props} />
      {props.sections.map((section) => (
        <SectionCard
          key={section.sectionId}
          {...section}
          isEditable={props.isEditable}
        />
      ))}
    </div>
  );
}
