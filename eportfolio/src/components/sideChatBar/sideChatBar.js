import React, { useState } from 'react';
import ChatIndividual from '../chatIndividual/chatIndividual';
import ChatScreenHeading from '../chatScreenHeading/chatScreenHeading';


function sideChatBar(props){

   
    return(
        <div>
            

            <ChatIndividual name={props.person} getName={props.getName}/>
          
        </div>
    )
}

export default sideChatBar;