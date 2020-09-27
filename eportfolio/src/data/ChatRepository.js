import { rdb, db, auth } from "./firebase";

export async function fetchChat(handle) {
  try {
    const content = await db.collection("users").doc(handle).get();
    const contentData = content.data();

    return contentData.chats;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchUser() {
  try {
    const uid = auth().currentUser.uid;
    const name = auth().currentUser.displayName;

    return Object.assign({}, { uid: uid, name: name });
  } catch (e) {
    console.log(e);
  }
}

export async function fetchChatName(currUser, chatId) {
  try {
    const data = await rdb.ref(`/members/${chatId}`).once("value");
    let members = Object.getOwnPropertyNames(data.val());
    let filtered = members.filter(function (member, index, arr) {
      return member !== currUser;
    });
    return filtered;
  } catch (e) {
    console.log(e);
  }
}
