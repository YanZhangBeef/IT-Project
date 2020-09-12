import React from 'react';
import {useState} from 'react';
import SideChatBar from "../sideChatBar/sideChatBar";
import Message from '../message/message';
import ChatScreenHeading from '../chatScreenHeading/chatScreenHeading';
import SendText from '../sendText/sendText';
import classes from "./chatScreen.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faVideo,
  faComment,
  faPaperPlane,
  
} from "@fortawesome/free-solid-svg-icons";



export default function ChatScreen(props){
  
  const [convo, setConvo] = useState([
    {
     
      author: 'otherPerson',
      message: 'Morbi tincidunt ornare massa eget egestas purus viverra.',
     // timestamp: new Date().getTime()
    },
    {
      author: 'handsomeVincent',
      message: 'Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
     
    },
    {
      author: 'handsomeVincent',
      message: 'Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
      
    },
    {
      author: 'otherPerson',
      message: 'Morbi tincidunt ornare massa eget egestas purus viverra.',
     
    },
    {
      author: 'otherPerson',
      message: 'Morbi tincidunt ornare massa eget egestas purus viverra.',
      
    },
    {
      author: 'otherPerson',
      message: 'Morbi tincidunt ornare massa eget egestas purus viverra.',
      
    },
    {
      author: 'handsomeVincent',
      message: 'Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
      
    },
   
  ]);
 
  const myChat="handsomeVincent";

  

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






let sendTextHandler = (event) =>{
   let newText={author: 'handsomeVincent', message: event.target.value}
   setConvo([...convo, newText]);
   
  

}

let openedChat= "John Smith"


  return (
    <div>
      
      <ChatScreenHeading name={props.person ? props.person : openedChat }/>
      
      
      
      
      {convo.map(message =>{
            
           
            return (<Message
                myMessage={message.author=== myChat}
                
                data={message.message}
                author={message.author}
                
            />)

    })}

    <div className={classes.textBox}>
      <SendText getText={(event) => sendTextHandler(event)}/> 
    </div>

   
      
    </div>
  );
}

