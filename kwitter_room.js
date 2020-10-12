
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
    username = localStorage.getItem("username");
    document.getElementById("user_name").innerHTML="Welcome " + username;
    function add_room(){
          roomname=document.getElementById("room_name").value;
          localStorage.setItem("roomname",roomname);
          firebase.database().ref("/").child(roomname).update({
                purpose : "adding roomname"
          });
          window.location="kwitterpage.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("roomname: "+ Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+ "</div> <hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
 
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitterpage.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location= "index.html";
}