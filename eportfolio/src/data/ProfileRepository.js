import firebase from "firebase";
import {db} from "./firebase";
import {v4 as uuidv4} from "uuid"

// should probably change schema to use ids....

export async function fetchContent(contentId) {
    try {
        const content = await db.collection("sectionContents").doc(contentId).get();
        const contentData = content.data();
        const userId = contentData.userId;

        const user = await db.collection("users").doc(userId).get();
        const userData = user.data();

        return Object.assign({}, contentData, userData, {contentId: content.id, userId: userId});
    }
    catch(e) {
        console.log(e);
    }
}

export async function fetchProfile(userId) {
    try {
        const user = await db.collection("users").doc(userId).get();
        const sections = await Promise.all(user.data().sections.map(fetchSectionHelper));
        console.log("sections ", sections);

        return Object.assign({}, user.data(), {sections: sections});
    }
    catch(e) {
        console.log(e);
    }
}


async function fetchSectionHelper(sectionId){
    const section = await db.collection("sections").doc(sectionId).get();
    console.log(section.data());
    const contents = await Promise.all(section.data().contents.map(fetchContent));

    return Object.assign({}, section.data(), {contents: contents, sectionId: sectionId});
}

export async function updateProfile(userId, profileData) {
    try {
        db.collection('users').doc(userId)
            .update(profileData);
    }
    catch(e) {
        console.error("Error updating profile", e);
    }
}

export async function updateContent(contentId, contentData) {
    try {
        db.collection('sectionContents').doc(contentId)
            .update(contentData);
    }
    catch(e) {
        console.error("Error updating content", e);
    }
}

export async function deleteContent(contentId) {
    try {
        const contentRef = db.collection('sectionContents').doc(contentId);
        const content = await contentRef.get();
        const sectionRef = db.collection('sections').doc(content.data().sectionId);

        const batch = db.batch();
        batch.delete(contentRef);
        batch.update(sectionRef, {
            contents: firebase.firestore.FieldValue.arrayRemove(contentId)
        })
        await batch.commit();
        return content.data().userId;
    }
    catch(e) {
        console.error("Error deleting content", e);
    }
}

export async function createContent(userId, sectionId, contentData) {
    try {
        const generatedContentId = uuidv4();
        const batch = db.batch();
        const contentRef = db.collection('sectionContents').doc(generatedContentId);
        const sectionRef = db.collection('sections').doc(sectionId);

        batch.set(contentRef, {...contentData, userId, sectionId});
        batch.update(sectionRef, {
            contents: firebase.firestore.FieldValue.arrayUnion(generatedContentId)
        });
        
        await batch.commit();
        return generatedContentId;            
    }
    catch(e) {
        console.error("Error creating content", e);
    }
}
