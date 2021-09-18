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

  user_name = localStorage.getItem("Username");
  document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

  function addroom() {
         room_name = document.getElementById("room_name").value;

        localStorage.setItem("Roomname",room_name);
    
        window.location = "kwitter_page.html";

        firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Name"
        });
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("room_name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML += row;

  //End code
  });});}



getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}