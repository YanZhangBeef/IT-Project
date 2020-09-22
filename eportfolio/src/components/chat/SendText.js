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
  };
  return (
    <div>
      <form onSubmit={props.sendText}>
        <div className={classes.textBox}>
          <input
            type="text"
            onChange={(event) => {
              props.getText(event);
            }}
          />
          <button type="submit" onSubmit={props.sendText}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </form>
    </div>
  );
}

//onSubmit={props.getText}
