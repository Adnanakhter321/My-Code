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
      // setTimeout(function () {
      //   errorel.innerHTML = ""
      // }, 3000)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // 
      // alert("Error: " + errorMessage)
      errorel.innerHTML = "Note: " + errorMessage
      // setTimeout(function () {
      //   errorel.innerHTML = ""
      // }, 3000)
    });
}

function login() {
  firebase.auth().signInWithEmailAndPassword(emailel.value, passwordel.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      errorel.innerHTML = "Succesfully Login"
      setTimeout(function () {
        errorel.innerHTML = ''
      }, 3000)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      errorel.innerHTML = "Note: " + errorMessage
      setTimeout(function () {
        errorel.innerHTML = ''
      }, 3000)
    });
}

function whoisuser() {
  setTimeout(function () {
    const user = firebase.auth().currentUser;
    console.log(user);
  }, 3000)
}

function forgotpass() {
  firebase.auth().onAuthStateChanged((emailel) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
     alert('yes')
     console.log(emailel.value);
  
      // ...
    } else {
      // User is signed out
      alert('no')
    }
  });
  


  firebase.auth().sendPasswordResetEmail(emailel)
    .then(() => {
      // Password reset email sent!
      // ..
      errorel.innerHTML ="Email sended"
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      errorel.innerHTML = "Note: " + errorMessage
    });
}

