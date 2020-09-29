import React, { useState, useEffect } from "react";
import { fetchUser, fetchDetails } from "../../data/ChatRepository";

import SideChatBar from "../chat/SideChatBar";
import ChatScreen from "../chat/ChatScreen";
import classes from "./Chat.module.css";

import ChatScreenHeading from "../chat/ChatScreenHeading";

export default function Chat(props) {
  const [selected, setSelected] = useState("");
  const [user, setUser] = useState({ name: "", uid: "" });
  const [details, setDetails] = useState({ chats: [], profileImg: "" });
  const [selectedName, setSelectedName] = useState("");
  const [selectedImage, setSelectedImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/eportfolio-5head.appspot.com/o/no-img.png?alt=media"
  );

  useEffect(() => {
    fetchUser().then((data) => setUser(data));
  }, []);

  useEffect(() => {
    if (user.uid) {
      fetchDetails(user.uid).then((data) => setDetails(data));
    }
  }, [user]);

  const openChatHandler = (id, name, image) => {
    setSelected(id);
    setSelectedName(name);
    setSelectedImage(image);
  };

  // const getChatNameHandler = () => {

  // }

  return (
    <div className="container.fluid">
      <div className={classes.chat}>
        <div className={classes.sideChatBar}>
          {user ? (
            <ChatScreenHeading
              name={user.name}
              profileImg={details.profileImg}
            />
          ) : (
            <p>loading...</p>
          )}

          {details ? (
            details.chats.map((chatId) => {
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
          <ChatScreen
            me={user}
            person={selected}
            name={selectedName}
            image={selectedImage}
          />
        </div>
      </div>
    </div>
  );
}
