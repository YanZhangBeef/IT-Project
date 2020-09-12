import React from 'react';
import classes from './sendText.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faVideo,
  faComment,
  faPaperPlane,
  
} from "@fortawesome/free-solid-svg-icons";
export default function SendText(props){

    let text= null;

    const newText = (event) =>{
        text=event.target.value

    }
    return(
        <div>
            <form onSubmit={props.getText}>
            <input className={classes.textBox} type="text" onChange={(event) => {newText(event)}}/>
            <FontAwesomeIcon icon={faPaperPlane} />
            
            </form>

        </div>
    )

}

//onSubmit={props.getText}