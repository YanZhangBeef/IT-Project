/*eslint-disable*/
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

  const myChat = props.me.uid;

  let ref;
  let sendRef;
  let allChat;
  let temp = null;
  let chatsRef;
  const chatSelect = "Open a conversation";

  useEffect(() => {
    if (props.person) {
      ref = rdb.ref("/messages");
      ref.on("value", gotData);
    }
    return () => {};
  }, [props.person]);

  useEffect(() => {
    scrollToEnd();

    return () => {};
  }, [convo]);

  function gotData(data) {
    if (props.person) {
      allChat = data.val();
      console.log(allChat[props.person]);
      if (allChat[props.person]) {
        temp = allChat[props.person];
        let newStuff = Object.values(temp);

        setConvo(newStuff);
      } else {
        setConvo([]);
      }
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

      let upload = newText.message;
      if (newText.message.length > 40) {
        upload = newText.message.substring(0, 40) + "...";
      }

      let lastMessage = {
        title: "idk",
        lastMessage: upload,
      };
      chatsRef = rdb.ref("/chats/" + props.person);
      chatsRef.set(lastMessage);

      sendRef = rdb.ref("/messages/" + props.person);
      sendRef.push(newText);
    }
  };

  const displayMessages = () => {
    if (convo.length > 0) {
      return true;
    }
    return false;
  };

  return (
    <div className="container.fluid">
      <ChatScreenHeading
        name={props.person ? props.name : chatSelect}
        profileImg={props.image}
      />
      <div className={classes.scroll} id="chatList">
        {displayMessages()
          ? convo.map((message, i) => {
              return (
                <Message
                  key={i}
                  myMessage={message.name.uid === myChat}
                  data={message.message}
                  author={message.name}
                />
              );
            })
          : null}
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
