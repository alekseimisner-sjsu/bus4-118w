// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlZmn_bk9FqGMxxgmtjPYkO1rhMp4yKkE",
  authDomain: "fhfip-4c6cc.firebaseapp.com",
  projectId: "fhfip-4c6cc",
  databaseURL: "https://fhfip-4c6cc-default-rtdb.firebaseio.com/",
  storageBucket: "fhfip-4c6cc.appspot.com",
  messagingSenderId: "337262247852",
  appId: "1:337262247852:web:29b64e9d18e8e4d7710409"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const adoptionRef = dbRef.child('adoptionRequest');
adoptionRef.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
});

function send(){
  var animalID = document.getElementById("animalID").value;
  var animalName = document.getElementById("animalName").value;
  var email = document.getElementById("email").value;
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var phonenumber = document.getElementById("phonenumber").value;

  adoptionRef.push().set({
    animalID: animalID,
    animalName: animalName,
    email: email,
    firstname: firstname,
    lastname: lastname,
    phonenumber: phonenumber,
  });
}
