import React, { useContext } from "react";
import firebase from "firebase";
import styles from "./ProfileCard.module.css";
import cardStyles from "./SectionCard.module.css";
import { AuthContext } from "../../data/Auth";
import { db, rdb, auth } from "../../data/firebase";

import { EditableTextArea, EditableTextField } from "./EditableTextArea";
import ProfileImage from "./ProfileImage";
import { Link, Redirect } from "react-router-dom";

export default function ProfileCard(props) {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser.displayName);

  async function startMessage(myId, otherId) {
    try {
      const myName = currentUser.displayName;
      const otherName = props.displayName;

      let members = {};
      members[myName] = myId;
      members[otherName] = otherId;

      const myContent = await db.collection("users").doc(myId).get();
      const myContentData = myContent.data();
      const myChats = myContentData.chats;

      const newChatId = myId + otherId;
      const newChatId2 = otherId + myId;

      //if any form not already present

      if (!myChats.includes(newChatId) && !myChats.includes(newChatId2)) {
        //updating chats array in firestory
        db.collection("users")
          .doc(myId)
          .update({
            chats: firebase.firestore.FieldValue.arrayUnion(newChatId),
          });

        db.collection("users")
          .doc(otherId)
          .update({
            chats: firebase.firestore.FieldValue.arrayUnion(newChatId),
          });

        //push to RDB
        rdb.ref(`/members/${newChatId}`).set(members);
        rdb.ref(`/chats/${newChatId}`).set({ lastMessage: "", title: "" });
        rdb.ref(`/messages/${newChatId}`).set();
        //{message: , name: {email:"", name:myName}}
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={`${cardStyles["section-card"]} shadow p-4 mt-5`}>
      <div className={`${styles["profile"]} my-2 mb-4`}>
        <div className="mr-5">
          {console.log(props)}
          <ProfileImage
            isEditable={props.isEditable}
            handleUpload={props.handleUpload}
            thumbnailUrl={props.profilePictureUrl}
          />
        </div>
        <div className={`${styles["profile-content"]} mr-auto`}>
          <h1 className={styles["profile-name"]}>{props.displayName}</h1>
          <EditableTextField
            isEditable={props.isEditable}
            text={props.tagline}
            handleSave={(tagline) => props.updateProfile({ tagline })}
          />
        </div>

        {currentUser != null && currentUser?.uid !== props.userId && (
          <div className={`${styles["profile-message"]}`}>
            <Link to="/chat">
              <button
                onClick={() => {
                  startMessage(currentUser.uid, props.userId);
                  // console.log("currentUSer"+currentUser.uid);
                  // console.log("clickeduser"+props.userId);
                }}
                className="btn btn-primary"
              >
                Message
              </button>
            </Link>
          </div>
        )}

        {props.showViewProfileBtn && (
          <div className={`${styles["profile-message"]} ml-2`}>
            <Link to={"/profile/" + props.userId}>
              <button className="btn btn-primary">View profile</button>
            </Link>
          </div>
        )}
      </div>
      <hr />
      <EditableTextArea
        isEditable={props.isEditable}
        text={props.about}
        handleSave={(about) => props.updateProfile({ about })}
      />
    </div>
  );
}
