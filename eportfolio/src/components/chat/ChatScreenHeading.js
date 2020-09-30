import React from "react";
import classes from "./ChatScreenHeading.module.css";

export default function ChatScreenHeading(props) {
  let usrImg =
    "https://firebasestorage.googleapis.com/v0/b/eportfolio-5head.appspot.com/o/no-img.png?alt=media";
  if (props.profileImg) {
    usrImg = props.profileImg;
  }
  return (
    <div>
      <div className={classes.heading}>
        <img className={classes.profilePic} src={usrImg} alt="Loading" />
        <h3 className={classes.name}>{props.name}</h3>
      </div>
      <hr className={classes.hrSize} />
    </div>
  );
}
