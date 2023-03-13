//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
var name = message_data['name'];
var message = message_data['message'];
var like = message_data['like'];
nameHTML = "<h3>" + name + "<img class = 'user_tick' src ='tick.png'> </h3>";
message_with_tag ="<h3 class='message_h4'>"+ message +"</h4>";
like_button = "<button class='btn-btn-warning' id="+firebase_message_id+" value="+like+" onclick='update(thiS.id)'>" ;
SPAN ="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> <hr>";
row = nameHTML + message_with_tage + like_button + SPAN ;
document.getElementById("output").innerHTML+=row;
      } });  }); }
getData();

function send(){
      var message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,message:message,like:0
      }) ;
      document.getElementById("msg").value=" ";
}
var user_name= localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");
function update(message_id){
    btn_id =  message_id;
    likes = document.getElementById(btn_id).value;
    updated_likes = Number(likes)+1;
    firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
    });
}