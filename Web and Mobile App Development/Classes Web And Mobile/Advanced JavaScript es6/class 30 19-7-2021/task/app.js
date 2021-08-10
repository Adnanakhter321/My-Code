var usernameel = document.getElementById('username');
var emailel = document.getElementById('email');
var passwordel = document.getElementById('password');
var div = document.getElementsByTagName('div')[0];
var div2 = document.getElementsByTagName('div')[1];
div2.style.display = 'none'
var emailel2 = document.getElementById('email2');
var passwordel2 = document.getElementById('password2');
var div3 = document.getElementsByTagName('div')[2];
div3.style.display = 'none'
// var errorel = document.getElementsByTagName(span)[0];
var fgpass = document.getElementById('fgpass');
var value = localStorage.getItem('login')

if(value == 'done' ){
    window.location = "./home.html";
    console.log(value)
}


function reg() {
    console.log(emailel.value, passwordel.value)
    firebase.auth().createUserWithEmailAndPassword(emailel.value, passwordel.value)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // errorel.innerHTML = "Succesfully Registered"
            // setTimeout(function () {
            //   errorel.innerHTML = ""
            // }, 3000)
            var dataToSave = {
                email: user.email,
                userName: usernameel.value,
                UID: user.uid
            }

            saveUserInFirestore(dataToSave);


            alert('DONE')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
            // alert("Error: " + errorMessage)
            // errorel.innerHTML = "Note: " + errorMessage
            // setTimeout(function () {
            //   errorel.innerHTML = ""
            // }, 3000)
        });
}

firebase.auth().onAuthStateChanged((user) => {
    // console.log(user, '*********************');
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...

    }
});


function loginpage() {
    div.style.display = 'none'
    div2.style.display = 'block'
    div3.style.display = 'none'
}
function regpage() {
    div.style.display = 'block'
    div2.style.display = 'none'
}
function forgotpass() {
    div3.style.display = 'block'
    div2.style.display = 'none'

}

function login() {
    firebase.auth().signInWithEmailAndPassword(emailel2.value, passwordel2.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // errorel.innerHTML = "Succesfully Login"
            // setTimeout(function () {
            //   errorel.innerHTML = ''
            // }, 3000)
            alert("DONE")
            window.location = "./home.html";
            localStorage.setItem('login', 'done')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
            // errorel.innerHTML = "Note: " + errorMessage
            // setTimeout(function () {
            //   errorel.innerHTML = ''
            // }, 3000)
        });
}

function submit() {
    console.log(fgpass.value)
    firebase.auth().sendPasswordResetEmail(fgpass.value)
        .then(() => {
            alert('email sent')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert('Error: ' + errorMessage)
        })
};




function logout() {
    firebase.auth().signOut()
        .then(() => {
            localStorage.setItem('login', 'none')
            window.location = './index.html';
        })
}


// let db = firebase.firestore();

function saveUserInFirestore(userToSave) {
    // firebase.firestore().collection("users").add(userToSave)
    //     .then((docRef) => {
    //         console.log("Document written with ID: ", docRef.id);
    //     })
    let uid = 0;
    uid = uid + 1;

    firebase.firestore().collection('users').doc(userToSave.UID).set(userToSave);
    console.log(uid);

    // db.collection("users").doc("SaylaniTeacherHaider")
    //     .update({
    //         teacher: false
    //     })
    //     .then(() => {
    //         console.log("Document successfully updated!");
    //     })
    //     .catch((error) => {
    //         // The document probably doesn't exist.
    //         console.error("Error updating document: ", error);
    //     });;



}
