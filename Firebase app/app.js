let userNameEl = document.getElementById('user-name');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');
let passwordRepeatEl = document.getElementById('repeatp');
let userRoleEl = document.getElementsByName('user-role');
let userImageEl = document.getElementById('file');
let country = document.getElementById('country');
let imgEl = document.getElementById('file');
let imgEl2 = document.getElementById('image');
function changeimage() {
    imgEl2.src = imgEl.files[0].name;
}

async function loginuser() {
    try {
        let login = await firebase.auth().signInWithEmailAndPassword(emailEl.value, passwordEl.value)

    } catch (error) {
        console.log(error);
    }
}


let storage = firebase.storage();

async function registeruser() {
    let db = firebase.firestore();
    try {
        var userCredential = await firebase.auth().createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
    }
    catch (error) {
        console.log(error);
    }
    let user = userCredential.user;

    console.log('USER CREATED');
    let url = await imageuploadtofirebase(user.uid);
    console.log(url);
    let users = {
        username: userNameEl.value,
        email: emailEl.value,
        password: passwordEl.value,
        Rpassword: passwordRepeatEl.value,
        country: checkcountry(),
        userRole: checkrole(),
        userImage: url
    }
    try {
        db.collection('users').doc(user.uid).set(users).then(() => { console.log('Data Submitted'); })
    }
    catch (error) {
        console.log(error);
    }
}

async function imageuploadtofirebase(uid) {
    return new Promise(async (resolve, reject) => {
        let image = userImageEl.files[0];
        let storageRef = storage.ref();
        let imageRef = storageRef.child(`userimages/${uid}/${image.name}`);
        await imageRef.put(image)
        console.log('IMAGE UPLOADED');
        var url = await imageRef.getDownloadURL()
        resolve(url)
    })
}



function checkrole() {
    let checkrole;
    for (var a = 0; a < userRoleEl.length; a++) {
        if (userRoleEl[a].checked) {
            checkrole = userRoleEl[a].value;
        }
    }
    return checkrole;
}
function checkcountry() {
    let checkrole;
    for (var a = 0; a < country.length; a++) {
        if (country[a].selected) {
            checkrole = country[a].value;
        }
    }
    return checkrole;
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        console.log(uid);
        console.log(user);
        if (user && window.location === './index.html' || window.location === './login.html' ) {
            window.location = './home.html';
        }
        // ...
    }


    else {

        if (!user && window.location === './home.html') {
            window.location = './index.html';
        }

        // User is signed out
        // ...
    }
});

function logout() {
    firebase.auth().signOut();
}