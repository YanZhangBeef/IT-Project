const functions = require('firebase-functions');
const database = require('./database');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.initNewUser = functions.auth.user().onCreate((user) => {
    // setup the database entries for a new user
    //db.collection('users').doc(user.uid).set()
})


database.populateDummyData();
