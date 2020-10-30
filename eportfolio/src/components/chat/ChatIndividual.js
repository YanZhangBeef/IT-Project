import React, { useState, useEffect } from "react";
import classes from "./ChatIndividual.module.css";
import { fetchChatName, fetchChatImage } from "../../data/ChatRepository";
import { rdb } from "../../data/firebase";
import ProfileImage from "../../components/profile/ProfileImage";

function ChatIndividual(props) {
  const [member, setMember] = useState({ users: [], uid: [] });
  const [lastMessage, setLastMessage] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    fetchChatName(props.currUser, props.chatId).then((data) => {
      console.log(data);
      setMember(data);
    });
  }, [props.chatId, props.currUser]);

  useEffect(() => {
    fetchChatImage(member.uid).then((data) => {
      setImage(data);
    });
  }, [member]);

  useEffect(() => {
    rdb.ref(`/chats/${props.chatId}`).on("value", (snapshot) => {
      setLastMessage(snapshot.val().lastMessage);
    });
  });
  return (
    <div className={classes.individualChat}>
      <ProfileImage thumbnailUrl={image} height="50px" width="50px" />
      <div
        className={classes.individualChatInfo + " ml-3"}
        onClick={() => {
          props.getId(props.chatId, member.users, image);
        }}
      >
        <h2 className={classes.individualName}>
          {member.users ? member.users.join() : "loading"}
        </h2>
        <p className={classes.individualConvo}>
          {" "}
          {lastMessage ? lastMessage : "start chatting !"}
        </p>
      </div>
    </div>
  );
}

export default ChatIndividual;
