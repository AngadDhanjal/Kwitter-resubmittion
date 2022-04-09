const firebaseConfig = {
      apiKey: "AIzaSyDf3THCFs9CC_vacnzXPN5-AA1XiJHZpBs",
      authDomain: "chat-web-app-cec3d.firebaseapp.com",
      projectId: "chat-web-app-cec3d",
      storageBucket: "chat-web-app-cec3d.appspot.com",
      messagingSenderId: "804376208474",
      appId: "1:804376208474:web:4e18299bfd9aa5b7842463",
      measurementId: "G-0BFWKG1PEW"
    };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value="";
  }

  function logout()
  {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location.replace("index.html");
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_tag = "</h4 class='message_h4'>"+message+"</h4><br>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row = name_tag + message_tag + like_button + span_tag;
document.getElementById("output").innerHTML +=row;


//End code
    } });  }); }
getData();


function updateLike(message_id)
{
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes)+1;
    firebase.database().ref(room_name).child(message_id).update({
          like:updated_likes
    });
}