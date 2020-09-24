import React, { useState, useEffect } from "react";
import ChatIndividual from "./ChatIndividual";
// import ChatScreenHeading from "./ChatScreenHeading";
import { rdb, db, auth } from "../../data/firebase";

function SideChatBar(props) {
  const [people, setPeople] = useState([]);

  let ref = rdb.ref("/messages");
  let keys = null;
  let values = null;
  let allChat;

  useEffect(() => {
    {
      ref.on("value", gotData);
    }
    return () => {};
  }, [allChat, gotData, ref]);

  function gotData(data) {
    allChat = data.val();
    values = Object.values(allChat);
    keys = Object.keys(allChat);
    setPeople(keys);
  }

  return (
    <div>
      {people.map((person) => {
        return <ChatIndividual name={person} getName={props.getName} />;
      })}
      {/* <ChatIndividual name={props.person} getName={props.getName} /> */}
    </div>
  );
}

export default SideChatBar;
