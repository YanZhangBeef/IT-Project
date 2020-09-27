import React, { useState, useEffect } from "react";
import classes from "./ChatIndividual.module.css";
import { fetchChatName } from "../../data/ChatRepository";
import { rdb } from "../../data/firebase";

function ChatIndividual(props) {
  const [member, setMember] = useState([]);
  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    fetchChatName(props.currUser, props.chatId).then((data) => {
      setMember(data);
      {
        console.log();
      }
    });
  }, [props.chatId, props.currUser]);

  useEffect(() => {
    rdb.ref(`/chats/${props.chatId}`).on("value", (snapshot) => {
      setLastMessage(snapshot.val().lastMessage);
    });
  });
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
          props.getId(props.chatId, member);
        }}
      >
        <h2 className={classes.individualName}>
          {member ? member.join() : "loading"}
        </h2>
        <p className={classes.individualConvo}>
          {" "}
          {lastMessage ? lastMessage : "loading"}
        </p>
      </div>
    </div>
  );
}

export default ChatIndividual;
