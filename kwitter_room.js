
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBI-JEhzrNuC0bPKRsMIJlLw8ZFpEx1jmA",
      authDomain: "kwitter-b5485.firebaseapp.com",
      databaseURL: "https://kwitter-b5485.firebaseio.com",
      projectId: "kwitter-b5485",
      storageBucket: "kwitter-b5485.appspot.com",
      messagingSenderId: "944183542240",
      appId: "1:944183542240:web:8ed852e27baed6dfed2b85",
      measurementId: "G-5TCMP090Q1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
