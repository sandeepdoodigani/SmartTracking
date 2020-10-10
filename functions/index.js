const functions = require('firebase-functions');
var admin = require("firebase-admin");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
var lat='';
var longi='';
var trainname;
var stationno;


admin.initializeApp({
  credential: admin.credential.applicationDefault(),
   databaseURL: "https://smarttrackingsytem.firebaseio.com"
});
exports.location = functions.https.onRequest((request, response) => {
	 console.log(request.query);
	  lat=request.query.field1;
	  longi=request.query.field2;
	  var recommendations = admin.database().ref("Location");
	  recommendations.set({
    "latitude":String(lat),
    "longitude":String(longi)
    
  });
	  
	
 response.send("Data Inserted");
 });
 
 