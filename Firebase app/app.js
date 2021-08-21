let userNameEl = document.getElementById('user-name');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');
let passwordRepeatEl = document.getElementById('repeatp');
let userRoleEl = document.getElementsByName('user-role');
let userImageEl = document.getElementById('file');
// let randomimg = document.getElementsByClassName('avatar');
let storage = firebase.storage();

function registeruser() {
    let db = firebase.firestore();

    let users = {
        username: userNameEl.value,
        email: emailEl.value,
        password: passwordEl.value,
        Rpassword: passwordRepeatEl.value,
        userRole: checkrole(),
        userImage: userImageEl.files[0].name
    }

    if (userImageEl) {
        firebase.auth().createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
            .then((userCredential) => {
                let user = userCredential.user;
                let image = userImageEl.files[0];
                let storageRef = storage.ref();
                let imageRef = storageRef.child(`avatar/${user.uid}/${image.name}`);
                let url = imageRef.getDownloadURL()
                    .then((url) => {
                        console.log(url);
                    })
                    .catch((error) => {
                        var errorMessage = error.message;
                        console.log(errorMessage);
                    })
                // console.log('done');
                // db.collection('users').doc(user.uid).set(users);
            })


            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }





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