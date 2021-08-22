let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');


firebase.auth().onAuthStateChanged((user) => {
    console.log(user);

});

