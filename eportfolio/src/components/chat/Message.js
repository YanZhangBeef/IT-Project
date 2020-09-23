import React from "react";
import classes from "./Message.module.css";

export default function Message(props) {
  return (
    <div className={classes.chat}>
      <div>
        <div className={props.myMessage ? classes.mine : classes.other}>
          <div className={classes.bubbleContainer}>
            <div className={classes.bubble}>{props.data}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
