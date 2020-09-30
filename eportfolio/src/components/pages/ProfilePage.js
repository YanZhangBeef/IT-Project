import React, { useContext } from "react";

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
          createNewContent={props.createNewContent}
          isEditable={props.isEditable}
          handleSquareThumbnailUpload={props.handleSquareThumbnailUpload}
          squareThumbnail={section.special}
        />
      ))}
    </div>
  );
}
