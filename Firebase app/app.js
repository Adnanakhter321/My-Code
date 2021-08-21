let userNameEl = document.getElementById('user-name');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');
let passwordRepeatEl = document.getElementById('repeatp');
let userRoleEl = document.getElementsByName('user-role');
let userImageEl = document.getElementById('file');
let country = document.getElementById('country');

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
    // let image = userImageEl.files[0];
    // let storageRef = storage.ref();
    // let imageRef = storageRef.child(`avatar/${user.uid}/${image.name}`);
    // try {
    //     await imageRef.put(image)
    // }
    // catch (error) {
    //     console.log(error);
    // }
    // console.log('IMAGE UPLOADED');
    // try {
    //     var url = await imageRef.getDownloadURL()
    // }
    // catch (error) {
    //     console.log(error);
    // }
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
        db.collection('users').doc(user.uid).set(users).then(() => { console.log('done'); })
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