import React, { useState } from "react";
import classes from "./ChatIndividual.module.css";

function ChatIndividual(props) {
  return (
    <div className={classes.individualChat}>
      <img
        className={classes.individualProfilePic}
        src="https://i.guim.co.uk/img/media/88f6b98714035656cb18fb282507b60e82edb0d7/0_57_2560_1536/master/2560.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0f65e142d72b44c837382331ecbaaa51"
        alt="Loading"
      />
      <div
        className={classes.individualChatInfo}
        onClick={() => {
          props.getName(props.name);
        }}
      >
        <h2 className={classes.individualName}>{props.name}</h2>
        <p className={classes.individualConvo}> *Hardcode for now*</p>
      </div>
    </div>
  );
}

export default ChatIndividual;
