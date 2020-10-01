import React from "react";
import ProfileImage from "../profile/ProfileImage";
import classes from "./ChatScreenHeading.module.css";

export default function ChatScreenHeading(props) {
  return (
    <div>
      <div className={classes.heading}>
        <ProfileImage
          thumbnailUrl={props.profileImg}
          height="70px"
          width="70px"
        />
        <h3 className={classes.name + " ml-3"}>{props.name}</h3>
      </div>
      <hr className={classes.hrSize} />
    </div>
  );
}
