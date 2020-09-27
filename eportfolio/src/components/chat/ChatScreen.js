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
  const [member, setNewMember] = useState([]);

  const myChat = props.me.name;
  // let ref = rdb.ref("/messages");
  let ref;
  let sendRef;
  let allChat;
  let getMember;
  let temp = null;
  let chatsRef;
  const chatSelect = "Open a conversation";

  useEffect(() => {
    //fix the orderBy value
    if (props.person) {
      ref = rdb.ref("/messages/" + props.person);
      ref.on("value", gotData);
    }

    // if(props.person){
    //   getMember= rdb.ref('/members/'+ props.person);
    //   getMember.on("value", (members)=>{
    //     let temp= members.val();
    //     setNewMember(temp);
    //     console.log(temp);
    //   })

    // }
    return () => {};
  }, [props.person]);

  function gotData(data) {
    // allChat = data.val();
    // console.log(allChat);
    if (props.person) {
      allChat = data.val();
      temp = allChat;

      console.log(allChat);
      // temp = allChat[props.person];
      let newStuff = Object.values(temp);
      setConvo(newStuff);
    }
  }

  //need to change this a bit as well
  let getTextHandler = (message) => {
    let currTime = new Date();
    let text = {
      name: props.me,
      message: message,
      timestamp: currTime.toString(),
    };
    setNewText(text);
  };

  const sendTextHandler = () => {
    if (props.person) {
      setConvo(...convo, newText);

      let lastMessage = { title: "idk", lastMessage: newText.message };
      chatsRef = rdb.ref("/chats/" + props.person);
      chatsRef.set(lastMessage);

      sendRef = rdb.ref("/messages/" + props.person);
      sendRef.push(newText);
      {
        console.log(props.me);
      }
    }
  };

  return (
    <div className="container.fluid">
      <ChatScreenHeading name={props.person ? props.name : chatSelect} />
      <div className={classes.scroll}>
        {convo.map((message) => {
          return (
            <Message
              myMessage={message.name.name === myChat}
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
