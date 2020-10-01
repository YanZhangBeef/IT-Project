import React from "react";
import classes from "./SendText.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faPaperclip,
  // faVideo,
  // faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
export default function SendText(props) {
  let text = null;

  const newText = (event) => {
    text = event.target.value;
    props.getText(text);
  };

  const submitHandler = (event) => {
    props.sendText();
    resetText();
    event.preventDefault();
  };

  const resetText = () => {
    document.getElementById("textInput").value = "";
  };
  return (
    <div className="container">
      <form
        onSubmit={(event) => {
          submitHandler(event);
        }}
      >
        <div className={classes.textBox}>
          <input
            id="textInput"
            className={classes.inputBox}
            type="text"
            placeholder="Send a message..."
            onChange={(event) => {
              newText(event);
            }}
          />
          <button
            className={classes.sendButton}
            type="submit"
            onSubmit={(event) => {
              submitHandler(event);
            }}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </form>
    </div>
  );
}

//onSubmit={props.getText}
