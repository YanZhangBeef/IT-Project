import React, { useState } from 'react';
import ChatIndividual from '../chatIndividual/chatIndividual';



function sideChatBar(props){

   
    return(
        <div>
            <ChatIndividual name={props.person} getName={props.getName}/>
          
        </div>
    )
}

export default sideChatBar;