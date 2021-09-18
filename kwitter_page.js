

// Your web app's Firebase configuration

    var firebaseConfig = {
        apiKey: "AIzaSyBYuqqnDiBPQmfsv_Duwkai1dan1ICFo-Q",
        authDomain: "chatbox-e3386.firebaseapp.com",
        databaseURL: "https://chatbox-e3386-default-rtdb.firebaseio.com",
        projectId: "chatbox-e3386",
        storageBucket: "chatbox-e3386.appspot.com",
        messagingSenderId: "920366408762",
        appId: "1:920366408762:web:48521340a68fc034694103"
      };
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();