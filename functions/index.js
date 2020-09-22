const functions = require('firebase-functions');
const database = require('./database');
const admin = require("firebase-admin");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// exports.initNewUser = functions.auth.user().onCreate((user) => {
//     // setup the database entries for a new user
//     //db.collection('users').doc(user.uid).set()
// })


// database.populateDummyData();


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

