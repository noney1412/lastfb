const functions = require('firebase-functions');
const express = require('express')
const admin = require('firebase-admin');
const engines = require('consolidate')
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

//const firebaseApp =
function getFacts(){
    const ref = firebaseApp.database().ref('facts');
    return ref.once('value').then(snap => snap.val())
}

const app = express()
app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine','hbs')


//pathset continue for this --->
app.get('/',(req,res)=>{
    res.set('Cache-Control','public,max-age=200,s-maxage=400')
    res.render('usermap')
})



// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.app = functions.https.onRequest(app);
