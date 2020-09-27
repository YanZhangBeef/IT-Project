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
  const [selectedName, setSelectedName] = useState("");

  useEffect(() => {
    fetchUser().then((data) => setUser(data));
  }, []);

  useEffect(() => {
    if (user.email) {
      fetchChat(user.email).then((data) => setChats(data));
    }
  }, [user]);

  const openChatHandler = (id, name) => {
    setSelected(id);
    setSelectedName(name);
  };

  // const getChatNameHandler = () => {

  // }

  return (
    <div className="container.fluid">
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
                  getId={openChatHandler}
                />
              );
            })
          ) : (
            <p>No data</p>
          )}
        </div>

        <div className={classes.chatScreen}>
          <ChatScreen me={user} person={selected} name={selectedName} />
        </div>
      </div>
    </div>
  );
}
