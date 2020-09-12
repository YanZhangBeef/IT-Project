import React, { useState } from 'react';
import SideChatBar from "../sideChatBar/sideChatBar";
import Message from '../message/message';
import ChatScreenHeading from '../chatScreenHeading/chatScreenHeading';

function chatScreen(props) {

  //const [count, setCount] = useState(0);
  const myChat="handsomeVincent"
  var temp = [
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
   
    
]

  return (
    <div>
        <ChatScreenHeading name={props.person}/>
        {console.log(props.person)}
        {temp.map(message =>{
            
           
            return (<Message
                myMessage={message.author=== myChat}
                
                data={message.message}
                author={message.author}
                
            />)

    })}
      
    </div>
  );
}

export default chatScreen;