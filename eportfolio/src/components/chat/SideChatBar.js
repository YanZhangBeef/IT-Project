import React from "react";
import ChatIndividual from "./ChatIndividual";

function SideChatBar(props) {
  return (
    <div>
      <ChatIndividual
        chatId={props.chatId}
        getId={props.getId}
        currUser={props.currUser}
      />
    </div>
  );
}

export default SideChatBar;
