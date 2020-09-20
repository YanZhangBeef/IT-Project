import React, { useState, useEffect } from "react";
import { rdb, db, auth } from "../../data/firebase";

import SideChatBar from "../chat/SideChatBar";
import ChatScreen from "../chat/ChatScreen";
import classes from "./Chat.module.css";

import ChatScreenHeading from "../chat/ChatScreenHeading";

export default function Chat(props) {
  const [selected, setSelected] = useState("");
  const [people, setPeople] = useState(["bob", "marley", "ross"]);
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth().currentUser.displayName);
    return () => {};
  }, [user]);

  const openChatHandler = (name) => {
    setSelected(name);
  };
  return (
    <div>
      <div className={classes.chat}>
        <div className={classes.sideChatBar}>
          <ChatScreenHeading name={user} />

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
