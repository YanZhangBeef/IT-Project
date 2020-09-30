import firebase from "firebase";
import { db, storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";
import { deleteArtefact, fetchArtefacts } from "./ArtefactRepository";

// should probably change schema to use ids....

export async function fetchContent(contentId) {
  try {
    const content = await db.collection("sectionContents").doc(contentId).get();
    const contentData = content.data();
    const userId = contentData.userId;

    const user = await db.collection("users").doc(userId).get();
    const userData = user.data();

    return Object.assign({}, contentData, userData, {
      contentId: content.id,
      userId: userId,
      artefacts: await fetchArtefacts(contentData.artefacts),
    });
  } catch (e) {
    console.log(e);
  }
}

export async function fetchProfile(userId) {
  try {
    const user = await db.collection("users").doc(userId).get();
    console.log(userId);
    const sections = await Promise.all(
      user.data().sections.map(fetchSectionHelper)
    );
    console.log("sections ", sections);

    return Object.assign({}, user.data(), { sections: sections, userId });
  } catch (e) {
    console.log(e);
  }
}

async function fetchSectionHelper(sectionId) {
  const section = await db.collection("sections").doc(sectionId).get();
  console.log(section.data());
  const contents = await Promise.all(section.data().contents.map(fetchContent));

  return Object.assign({}, section.data(), {
    contents: contents,
    sectionId: sectionId,
  });
}

export async function updateProfile(userId, profileData) {
  try {
    db.collection("users").doc(userId).update(profileData);
  } catch (e) {
    console.error("Error updating profile", e);
  }
}

export async function updateContent(contentId, contentData) {
  try {
    db.collection("sectionContents").doc(contentId).update(contentData);
  } catch (e) {
    console.error("Error updating content", e);
  }
}

export async function deleteContent(contentId) {
  try {
    const contentRef = db.collection("sectionContents").doc(contentId);
    const content = await contentRef.get();
    const sectionRef = db.collection("sections").doc(content.data().sectionId);

    const batch = db.batch();
    batch.delete(contentRef);
    batch.update(sectionRef, {
      contents: firebase.firestore.FieldValue.arrayRemove(contentId),
    });
    await batch.commit();

    if (content.artefacts != null && content.artefacts.length !== 0) {
      await Promise.all(content.artefacts.map(deleteArtefact));
    }

    return content.data().userId;
  } catch (e) {
    console.error("Error deleting content", e);
  }
}

export async function createContent(userId, sectionId, contentData) {
  try {
    const generatedContentId = uuidv4();
    const batch = db.batch();
    const contentRef = db.collection("sectionContents").doc(generatedContentId);
    const sectionRef = db.collection("sections").doc(sectionId);

    batch.set(contentRef, { ...contentData, userId, sectionId });
    batch.update(sectionRef, {
      contents: firebase.firestore.FieldValue.arrayUnion(generatedContentId),
      artefacts: [],
    });

    await batch.commit();
    return generatedContentId;
  } catch (e) {
    console.error("Error creating content", e);
  }
}

export async function uploadThumbnail(contentId, file) {
  try {
    const content = await fetchContent(contentId);

    const fileRef = storage
      .ref()
      .child(content.userId)
      .child(contentId)
      .child(file.name);

    await fileRef.put(file);
    const thumbnailUrl = await fileRef.getDownloadURL();
    await updateContent(contentId, {
      thumbnailUrl,
      thumbnailFullPath: fileRef.fullPath,
    });

    if (content.thumbnailFullPath != null) {
      await storage.ref().child(content.thumbnailFullPath).delete();
    }

    return Object.assign({}, content, {
      thumbnailUrl,
      thumbnailFullPath: fileRef.fullPath,
    });
  } catch (e) {
    console.error(e);
  }
}

export async function uploadSquareThumbnail(contentId, file) {
  try {
    const content = await fetchContent(contentId);

    const fileRef = storage
      .ref()
      .child(content.userId)
      .child(contentId)
      .child("squareThumbnail")
      .child(file.name);

    await fileRef.put(file);
    const squareThumbnailUrl = await fileRef.getDownloadURL();
    console.log(squareThumbnailUrl);
    await updateContent(contentId, {
      squareThumbnailUrl,
      squareThumbnailFullPath: fileRef.fullPath,
    });

    if (content.thumbnailFullPath != null) {
      await storage.ref().child(content.squareThumbnailFullPath).delete();
    }

    return Object.assign({}, content, {
      squareThumbnailUrl,
      squareThumbnailFullPath: fileRef.fullPath,
    });
  } catch (e) {
    console.error(e);
  }
}

export async function uploadProfilePicture(userId, file) {
  try {
    const profile = await fetchProfile(userId);

    const fileRef = storage.ref().child(userId).child(file.name);

    await fileRef.put(file);
    const profilePictureUrl = await fileRef.getDownloadURL();
    await updateProfile(userId, {
      profilePictureUrl,
      profilePictureFullPath: fileRef.fullPath,
    });

    if (profile.profilePictureFullPath != null) {
      await storage.ref().child(profile.profilePictureFullPath).delete();
    }

    return Object.assign({}, profile, {
      profilePictureUrl,
      profilePictureFullPath: fileRef.fullPath,
    });
  } catch (e) {
    console.error(e);
  }
}
