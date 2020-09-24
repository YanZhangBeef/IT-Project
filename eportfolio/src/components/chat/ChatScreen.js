import React from "react";
import { useState, useEffect } from "react";
import Message from "./Message";
import ChatScreenHeading from "./ChatScreenHeading";
import SendText from "./SendText";
import classes from "./ChatScreen.module.css";
import { rdb, db, auth } from "../../data/firebase";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPaperclip,
//   faVideo,
//   faComment,
//   faPaperPlane,
// } from "@fortawesome/free-solid-svg-icons";

export default function ChatScreen(props) {
  const [convo, setConvo] = useState([]);
  const [newText, setNewText] = useState("");

  const myChat = props.me;
  let ref = rdb.ref("/messages");
  let sendRef;
  let allChat;
  let temp = null;
  const chatSelect = "Open a conversation";

  useEffect(() => {
    ref.on("value", gotData);
    return () => {};
  }, [gotData, props.person, ref]);

  function gotData(data) {
    allChat = data.val();
    console.log(allChat);
    if (props.person) {
      temp = allChat[props.person];
      let newStuff = Object.values(temp);
      setConvo(newStuff);
    }
  }

  //need to change this a bit as well
  let getTextHandler = (message) => {
    let text = { name: props.me, message: message };
    setNewText(text);
  };

  const sendTextHandler = () => {
    if (props.person) {
      setConvo(...convo, newText);

      sendRef = rdb.ref("/messages/" + props.person);
      sendRef.push(newText);
    }
  };

  return (
    <div className="container.fluid">
      <ChatScreenHeading name={props.person ? props.person : chatSelect} />
      <div className={classes.scroll}>
        {convo.map((message) => {
          return (
            <Message
              myMessage={message.name === myChat}
              data={message.message}
              author={message.name}
            />
          );
        })}
      </div>

      <div className={classes.textBox}>
        <SendText
          sendText={sendTextHandler}
          getText={(event) => getTextHandler(event)}
        />
      </div>
    </div>
  );
}
