const functions = require('firebase-functions');
const database = require('./database');
const admin = require("firebase-admin");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.initNewUser = functions.auth.user().onCreate((user) => {
    database.initializeUser(user.uid, user.displayName);
})


database.populateDummyData();


// /************************************************/
// /* search indexing */
// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });


const algoliasearch = require("algoliasearch");
const ALGOLIA_ID = '76JJ07XEU4';
const ALGOLIA_ADMIN_KEY = 'd407cecc2295f8e2c2fa07672cfe947c';
const ALGOLIA_INDEX_NAME = "people_NAME";
const ALGOLIA_INDEX_NAME_SECTION = "sections";
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);


admin.initializeApp(functions.config().firebase, "app1");


exports.onUsersCreated = functions.firestore
  .document("users/{usersId}")
  .onCreate((snap, context) => {
    
    // Get the product document
    const user = snap.data();

    // Add an 'objectID' field which Algolia requires
    user.objectID = context.params.usersId;

    // Write to the algolia index
    const index = client.initIndex(ALGOLIA_INDEX_NAME);
    return index.saveObject(user);
});


exports.onUsersUpdated = functions.firestore
  .document("users/{usersId}")
  .onUpdate(async (change, context) => {

    // Get the old product data
    const oldProduct = change.before.data();

    // Get the new product document
    const user = change.after.data();
    user.objectID = context.params.usersId;

    const index = client.initIndex(ALGOLIA_INDEX_NAME);
    await index.partialUpdateObject(user);
});


exports.onUsersDeleted = functions.firestore
  .document("users/{usersId}")
  .onDelete((snap, context) => {

    const index = client.initIndex(ALGOLIA_INDEX_NAME);
    return index.deleteObject(snap.id);
  });



exports.onSectionCreated = functions.firestore
  .document("sectionContents/{secId}")
  .onCreate((snap, context) => {
    
    // Get the product document
    const section = snap.data();

    // Add an 'objectID' field which Algolia requires
    section.objectID = context.params.secId;

    // Write to the algolia index
    const index = client.initIndex(ALGOLIA_INDEX_NAME_SECTION);
    return index.saveObject(section);
});

exports.onSectionUpdated = functions.firestore
  .document("sectionContents/{secId}")
  .onUpdate(async (change, context) => {

    // Get the old product data
    const oldProduct = change.before.data();

    // Get the new product document
    const section = change.after.data();
    section.objectID = context.params.secId;

    const index = client.initIndex(ALGOLIA_INDEX_NAME_SECTION);
    await index.partialUpdateObject(section);
});

exports.onSectionDeleted = functions.firestore
  .document("sectionContents/{secId}")
  .onDelete((snap, context) => {

    const index = client.initIndex(ALGOLIA_INDEX_NAME_SECTION);
    return index.deleteObject(snap.id);
  });
  

