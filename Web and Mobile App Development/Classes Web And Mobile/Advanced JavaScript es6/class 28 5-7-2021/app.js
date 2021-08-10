var emailel = document.getElementById('email');
var passwordel = document.getElementById('password');
var errorel = document.getElementById('error');

function reg() {
  console.log(emailel.value, passwordel.value)
  firebase.auth().createUserWithEmailAndPassword(emailel.value, passwordel.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      errorel.innerHTML = "Succesfully Registered"
      console.log(user.data);
      createElement();
      createcollection(user);
      // setTimeout(function () {
      //   errorel.innerHTML = "null"
      // }, 3000)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // 
      // alert("Error: " + errorMessage)
      errorel.innerHTML = "Note: " + errorMessage;
      createElement()
      // setTimeout(function () {
      //   errorel.innerHTML = ""
      // }, 3000)
    });
}

function createcollection(user){
  firebase.firestore().collection('users').doc(user.uid).set({
    uid:user.uid,
    email:user.emailel
  })
}

function login() {
  firebase.auth().signInWithEmailAndPassword(emailel.value, passwordel.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      errorel.innerHTML = "Succesfully Login";
      createElement()
      // setTimeout(function () {
      //   errorel.innerHTML =''
      // }, 3000)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      errorel.innerHTML = "Note: "  + errorMessage;
      createElement()
      // setTimeout(function () {
      //   errorel.innerHTML = ''
      // }, 3000)
    });
}
function createElement(){
  var error = document.createElement('button')
  var errortext = document.createTextNode("OK")
  error.appendChild(errortext);
  errorel.appendChild(error);
  error.setAttribute('onclick','reset()') 
  error.style.width = '26px'
  error.style.height = '13px'
  error.style.fontSize = '7px'
  error.style.margin = '2px'
}
function reset(){
  errorel.innerHTML = "";
}
function passwordreset(){
  // import { getAuth, sendPasswordResetEmail } from "firebase/auth";

// const auth = getAuth();
firebase.auth().sendPasswordResetEmail(emailel.value)
  .then(() => {
    // Password reset email sent!
    // ..
    errorel.innerHTML = "Password reset email sent!";
    createElement();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}