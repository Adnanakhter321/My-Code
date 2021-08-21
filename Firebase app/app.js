let userNameEl = document.getElementById('user-name');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');
let passwordRepeatEl = document.getElementById('repeatp');
let userRoleEl = document.getElementsByName('user-role');
let userImageEl = document.getElementById('file');
// let randomimg = document.getElementsByClassName('avatar');

function registeruser() {

    let users = {
        username: userNameEl.value,
        email: emailEl.value,
        password: passwordEl.value,
        Rpassword: passwordRepeatEl.value,
        userRole: checkrole(),
        userImage: userImageEl.files[0].name
    }
    let db = firebase.firestore();

     firebase.auth().createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log('done');
            db.collection('users').doc(user.uid).set(users);
        })


        .catch((error) => {
            var errorMessage = error.message;
           console.log(errorMessage);
        });



}

// function Details(){
//     this.username = userNameEl.value;
//     this.email = emailEl.value;
//     this.password = passwordEl.value;
//     this.Rpassword = passwordRepeatEl.value;
//     this.userRole = checkrole();
//     this.userImage = userImageEl.files;
// }

function checkrole() {
    let checkrole;
    for (var a = 0; a < userRoleEl.length; a++) {
        if (userRoleEl[a].checked) {
            checkrole = userRoleEl[a].value;
        }
    }
    return checkrole;
}