import React, { useState } from "react";

import SideChatBar from "../chat/SideChatBar";
import ChatScreen from "../chat/ChatScreen";
import classes from "./Chat.module.css";

import SendText from "../chat/SendText";
import ChatScreenHeading from "../chat/ChatScreenHeading";
export default function Chat(props) {
  const [selected, setSelected] = useState("");

  let people = ["John Smith", "Harry", "Lewis"];

  const openChatHandler = (name) => {
    setSelected(name);
  };
  return (
    <div>
      <div className={classes.chat}>
        <div className={classes.sideChatBar}>
          <ChatScreenHeading name="*User Name*" />

          {people.map((person) => {
            return <SideChatBar person={person} getName={openChatHandler} />;
          })}
        </div>

        <div className={classes.chatScreen}>
          <ChatScreen person={selected} />
          {/* <SendText/> */}
        </div>
      </div>
    </div>
  );
}
