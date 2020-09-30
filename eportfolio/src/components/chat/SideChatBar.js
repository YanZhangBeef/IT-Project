import React from "react";
import ChatIndividual from "./ChatIndividual";
import classes from "./SideChatBar.module.css";

function SideChatBar(props) {
  return (
    <div className={classes.scroll}>
      <ChatIndividual
        chatId={props.chatId}
        getId={props.getId}
        currUser={props.currUser}
      />
    </div>
  );
}

export default SideChatBar;
