
 var firebaseConfig = {
      apiKey: "AIzaSyANJtG5NjIKcMVsXfw5lMwqBYhpDLW8oGI",
      authDomain: "kwitter-4515a.firebaseapp.com",
      databaseURL: "https://kwitter-4515a-default-rtdb.firebaseio.com",
      projectId: "kwitter-4515a",
      storageBucket: "kwitter-4515a.appspot.com",
      messagingSenderId: "755026733162",
      appId: "1:755026733162:web:735c881b328c14e74d4213"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

function getData()
{ firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
       window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
     window.location = "kwitter.html";
}