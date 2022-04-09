
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

user_name= localStorage.getItem("user_name");
 

 document.getElementById("user_name").innerHTML= " Welcome "+ user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("room name-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
     });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name );
window.location="kwitter_page.html";

}

function logout()
{
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location="index.html";
}