import firebase from "firebase";
import { db, storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";
import { fetchContent } from "./ProfileRepository";

export async function fetchArtefacts(artefactIds) {
  try {
    return await Promise.all(artefactIds.map(fetchArtefact));
  } catch (e) {
    console.error(e);
  }
}

export async function fetchArtefact(artefactId) {
  try {
    const artefact = await db.collection("artefacts").doc(artefactId).get();
    return Object.assign({ artefactId }, artefact.data());
  } catch (e) {
    console.error(e);
  }
}

export async function deleteArtefact(artefactId) {
  try {
    const artefact = await fetchArtefact(artefactId);

    if (artefact.fullPath != null) {
      await storage.ref().child(artefact.fullPath).delete();
    }
    const batch = db.batch();

    const artefactRef = db.collection("artefacts").doc(artefactId);
    const contentRef = db.collection("sectionContents").doc(artefact.contentId);

    batch.delete(artefactRef);
    batch.update(contentRef, {
      artefacts: firebase.firestore.FieldValue.arrayRemove(artefactId),
    });

    await batch.commit();
  } catch (e) {
    console.error(e);
  }
}

export async function uploadArtefact(contentId, file) {
  try {
    const artefactId = uuidv4();
    const content = await fetchContent(contentId);
    const userId = content.userId;
    const fileRef = storage
      .ref()
      .child(userId)
      .child(artefactId)
      .child(file.name);
    await fileRef.put(file);
    const fileUrl = await fileRef.getDownloadURL();
    const fileName = file.name;

    const batch = db.batch();

    const artefactRef = db.collection("artefacts").doc(artefactId);
    const contentRef = db.collection("sectionContents").doc(contentId);

    const newArtefact = {
      artefactId,
      fileName,
      fileUrl,
      userId,
      contentId,
      fullPath: fileRef.fullPath,
    };

    batch.set(artefactRef, newArtefact);
    batch.update(contentRef, {
      artefacts: firebase.firestore.FieldValue.arrayUnion(artefactId),
    });

    await batch.commit();
    return newArtefact;
  } catch (e) {
    console.error(e);
  }
}
