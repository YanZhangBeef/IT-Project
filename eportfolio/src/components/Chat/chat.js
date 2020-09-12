import React, {useState} from 'react';

import SideChatBar from '../sideChatBar/sideChatBar';
import ChatScreen from '../chatScreen/chatScreen';
import classes from './chat.module.css';

import SendText from '../sendText/sendText';

export default function Chat(props) {
    const [selected, setSelected] = useState('');

    let people=["John Smith", "Harry", "Lewis"];

    
    const openChatHandler = (name) => {
     
        setSelected(name);
       

    }
    return (
        <div>
            
        
      <div className={classes.chat}>
        <div className={classes.sideChatBar}>
        
          {people.map(person =>{
              return(
                  <SideChatBar person={person} getName={openChatHandler}/>

              );
          })}
        </div>

        <div className={classes.chatScreen}>
           
          <ChatScreen person={selected} />
          {/* <SendText/> */}
          
          
        </div>
      </div>
      </div>
    );
}