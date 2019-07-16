const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const decompose = require('cangjie-code').default;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.decompose = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        return decompose(req.query.q).then(result => {
            res.send(result);
        }).catch(err => {
            console.error("Got error while decomposing", new Error(err));
            res.send(err);
        });
    });
});
