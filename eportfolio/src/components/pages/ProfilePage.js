import React from "react";

import ProfileCard from "../profile/ProfileCard";
import SectionCard from "../profile/SectionCard";

export default function ProfilePage(props) {
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
