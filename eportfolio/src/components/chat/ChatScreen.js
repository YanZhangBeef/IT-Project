import React from "react";
import { useState } from "react";
import SideChatBar from "./SideChatBar";
import Message from "./Message";
import ChatScreenHeading from "./ChatScreenHeading";
import SendText from "./SendText";
import classes from "./ChatScreen.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faVideo,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function ChatScreen(props) {
  const [convo, setConvo] = useState([
    {
      author: "otherPerson",
      message: "Morbi tincidunt ornare massa eget egestas purus viverra.",
      // timestamp: new Date().getTime()
    },
    {
      author: "handsomeVincent",
      message:
        "Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      author: "handsomeVincent",
      message:
        "Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      author: "otherPerson",
      message: "Morbi tincidunt ornare massa eget egestas purus viverra.",
    },
    {
      author: "otherPerson",
      message: "Morbi tincidunt ornare massa eget egestas purus viverra.",
    },
    {
      author: "otherPerson",
      message: "Morbi tincidunt ornare massa eget egestas purus viverra.",
    },
    {
      author: "handsomeVincent",
      message:
        "Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
  ]);

  const myChat = "handsomeVincent";

  //   var temp = [
  //     {

  //       author: 'otherPerson',
  //       message: 'Morbi tincidunt ornare massa eget egestas purus viverra.',
  //      // timestamp: new Date().getTime()
  //     },
  //     {
  //       author: 'handsomeVincent',
  //       message: 'Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',

  //     },
  //     {
  //       author: 'handsomeVincent',
  //       message: 'Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',

  //     },
  //     {
  //       author: 'otherPerson',
  //       message: 'Morbi tincidunt ornare massa eget egestas purus viverra.',

  //     },
  //     {
  //       author: 'otherPerson',
  //       message: 'Morbi tincidunt ornare massa eget egestas purus viverra.',

  //     },
  //     {
  //       author: 'otherPerson',
  //       message: 'Morbi tincidunt ornare massa eget egestas purus viverra.',

  //     },
  //     {
  //       author: 'handsomeVincent',
  //       message: 'Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',

  //     },

  // ]

  let sendTextHandler = (event) => {
    let newText = { author: "handsomeVincent", message: event.target.value };
    setConvo([...convo, newText]);
  };

  let openedChat = "John Smith";

  return (
    <div className={classes.container}>
      <ChatScreenHeading name={props.person ? props.person : openedChat} />

      <div className={classes.scroll}>
        {convo.map((message) => {
          return (
            <Message
              myMessage={message.author === myChat}
              data={message.message}
              author={message.author}
            />
          );
        })}
      </div>

      <div className={classes.textBox}>
        <SendText getText={(event) => sendTextHandler(event)} />
      </div>
    </div>
  );
}
