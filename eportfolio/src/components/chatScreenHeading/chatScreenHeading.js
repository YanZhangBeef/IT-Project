import React from 'react';
import classes from './chatScreenHeading.module.css';

export default function ChatScreenHeading (props) {
    return(
        <div>
        <div className={classes.heading} >
            <img className={classes.profilePic} src="https://i.guim.co.uk/img/media/88f6b98714035656cb18fb282507b60e82edb0d7/0_57_2560_1536/master/2560.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0f65e142d72b44c837382331ecbaaa51" alt="Loading" />
            <h3 className={classes.name}>{props.name}</h3>
            
        </div>
        <hr className={classes.hrSize}/>
        </div>
    )
}