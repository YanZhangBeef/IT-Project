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
        <div >
            <form onSubmit={props.getText}>
                <div className={classes.textBox} >
                <input  type="text" onChange={(event) => {newText(event)}}/>
                <FontAwesomeIcon icon={faPaperPlane} />

                </div>
           
            
            </form>

        </div>
    )

}

//onSubmit={props.getText}