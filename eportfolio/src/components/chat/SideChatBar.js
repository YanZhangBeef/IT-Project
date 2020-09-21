import React from "react";
import ChatIndividual from "./ChatIndividual";

function sideChatBar(props) {
  return (
    <div>
      <ChatIndividual
        chatId={props.chatId}
        getName={props.getName}
        currUser={props.currUser}
      />
    </div>
  );
}

export default sideChatBar;
