import React from "react";
import classes from "./ChatScreenHeading.module.css";

export default function ChatScreenHeading(props) {
  return (
    <div>
      <div className={classes.heading}>
        <img
          className={classes.profilePic}
          src={props.profileImg}
          alt="Loading"
        />
        <h3 className={classes.name}>{props.name}</h3>
      </div>
      <hr className={classes.hrSize} />
    </div>
  );
}
