import React from "react";
import { useState, useEffect } from "react";
import Message from "./Message";
import ChatScreenHeading from "./ChatScreenHeading";
import SendText from "./SendText";
import classes from "./ChatScreen.module.css";
import { rdb } from "../../data/firebase";

export default function ChatScreen(props) {
  const [convo, setConvo] = useState([]);
  const [newText, setNewText] = useState("");

  const myChat = props.me.name;

  let ref;
  let sendRef;
  let allChat;
  let temp = null;
  let chatsRef;
  const chatSelect = "Open a conversation";

  useEffect(() => {
    //fix the orderBy value
    if (props.person) {
      ref = rdb.ref("/messages/" + props.person);
      ref.on("value", gotData);
    }
    return () => {};
  }, [props.person]);

  useEffect(() => {
    scrollToEnd();

    return () => {};
  }, [convo, scrollToEnd]);

  function gotData(data) {
    if (props.person) {
      allChat = data.val();
      temp = allChat;
      let newStuff = Object.values(temp);
      setConvo(newStuff);
    }
  }

  let getTextHandler = (message) => {
    let currTime = new Date();
    let text = {
      name: props.me,
      message: message,
      timestamp: currTime.toString(),
    };
    setNewText(text);
  };

  function scrollToEnd() {
    if (props.person) {
      let messageBody = document.getElementById("chatList");
      messageBody.scrollTop =
        messageBody.scrollHeight - messageBody.clientHeight;
    }
  }

  const sendTextHandler = () => {
    if (props.person) {
      setConvo(...convo, newText);

      let lastMessage = {
        title: "idk",
        lastMessage: newText.message.substring(0, 40),
      };
      chatsRef = rdb.ref("/chats/" + props.person);
      chatsRef.set(lastMessage);

      sendRef = rdb.ref("/messages/" + props.person);
      sendRef.push(newText);
    }
  };

  return (
    <div className="container.fluid">
      <ChatScreenHeading name={props.person ? props.name : chatSelect} />
      <div className={classes.scroll} id="chatList">
        {convo.map((message, i) => {
          return (
            <Message
              key={i}
              myMessage={message.name.name === myChat}
              data={message.message}
              author={message.name}
            />
          );
        })}
      </div>

      <div className={classes.textBox}>
        {props.person ? (
          <SendText
            sendText={sendTextHandler}
            getText={(event) => getTextHandler(event)}
          />
        ) : null}
      </div>
    </div>
  );
}
