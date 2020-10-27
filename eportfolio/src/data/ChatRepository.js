import { rdb, db, auth } from "./firebase";

export async function fetchDetails(handle) {
  try {
    const content = await db.collection("users").doc(handle).get();
    const contentData = content.data();
    const chats = contentData.chats;
    const profileImg = contentData.profileImg;

    return Object.assign({}, { chats: chats, profileImg: profileImg });
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

    let result = { users: [], uid: [] },
      key;
    for (key in data.val()) {
      if (key !== currUser) {
        result.users.push(key);
        result.uid.push(data.val()[key]);
      }
    }
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchChatImage(uids) {
  if (uids.length === 1) {
    try {
      const content = await db.collection("users").doc(uids[0]).get();
      const contentData = content.data();
      const profileImg = contentData.profilePictureUrl;

      if (profileImg) {
        return profileImg;
      } else {
        return "";
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    return "";
  }
}
