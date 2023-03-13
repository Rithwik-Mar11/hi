var firebaseConfig = {
  apiKey: "AIzaSyDV9y1mQyGCUFM1KMP1ismWmBHdhkdXooQ",
  authDomain: "quitter-b77e3.firebaseapp.com",
  databaseURL: "https://quitter-b77e3-default-rtdb.firebaseio.com",
  projectId: "quitter-b77e3",
  storageBucket: "quitter-b77e3.appspot.com",
  messagingSenderId: "387866501042",
  appId: "1:387866501042:web:a8bd21ff00f0253732ceab"
};


firebase.initializeApp(firebaseConfig);
 
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML=" welcome  " + user_name + " !";

function addRoom (){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
    });
    
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
console.log(Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
window.location="kwitter_page.html";


 });
});
}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}