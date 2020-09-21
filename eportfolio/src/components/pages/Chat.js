import React, { useState, useEffect } from "react";
import { fetchUser, fetchChat } from "../../data/ChatRepository";

import SideChatBar from "../chat/SideChatBar";
import ChatScreen from "../chat/ChatScreen";
import classes from "./Chat.module.css";

import ChatScreenHeading from "../chat/ChatScreenHeading";

export default function Chat(props) {
  const [selected, setSelected] = useState("");
  const [user, setUser] = useState({ name: "", email: "" });
  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetchUser().then((data) => setUser(data));
  }, []);

  useEffect(() => {
    if (user.email) {
      fetchChat(user.email).then((data) => setChats(data));
    }
  }, [user]);

  const openChatHandler = (name) => {
    setSelected(name);
  };
  return (
    <div>
      <div className={classes.chat}>
        <div className={classes.sideChatBar}>
          {user ? <ChatScreenHeading name={user.name} /> : <p>loading...</p>}

          {chats ? (
            chats.map((chatId) => {
              return (
                <SideChatBar
                  key={chatId}
                  chatId={chatId}
                  currUser={user.name}
                  getName={openChatHandler}
                />
              );
            })
          ) : (
            <p>No data</p>
          )}
        </div>

        <div className={classes.chatScreen}>
          <ChatScreen person={selected} />
          {/* <SendText/> */}
        </div>
      </div>
    </div>
  );
}
