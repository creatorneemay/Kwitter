//YOUR FIREBASE LINKS
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
    user_name=localStorage.getItem("username");
    room_name=localStorage.getItem("roomname");
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name, message:msg, like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//next class
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_tag="<h4>"+name+" <img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_tag="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span> </button><hr>";
row=name_tag+message_tag+like_tag+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location= "index.html";
}
function updatelike(message_id){
      button_id=message_id
      likes=document.getElementById(button_id).value;
      updated_like=Number(likes)+1;
      console.log(updated_like);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_like
      });
}