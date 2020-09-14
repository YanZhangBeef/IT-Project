import React from 'react';
import classes from './message.module.css';

export default function Message(props) {
  
    

    return (
    <div className={classes.chat}>
        

    
    <div className={props.myMessage ? classes.mine : classes.other}> 
     {console.log (props.myMessage)}
         <div className={classes.bubbleContainer}>
          <div className={classes.bubble}>
            {props.data}
          </div>
        </div>
      </div>
      </div>
    );
}