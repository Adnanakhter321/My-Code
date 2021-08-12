let storage = firebase.storage();
let auth = firebase.auth();
let db = firebase.firestore();


let userNameEl = document.getElementById('user-name');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');
let passwordRepeatEl = document.getElementById('repeatp');
let userRoleEl = document.getElementsByName('user-role');
let userImageEl = document.getElementById('file');
let randomimg = document.getElementsByClassName('avatar');

async function regiserUser() {

    let userCreated = await auth.createUserWithEmailAndPassword(emailEl.value, passwordEl.value);
    let UID = userCreated.user.uid;
    let imageURL = await uploadImageToStorage(UID);

    let user = {
        userName: userNameEl.value,
        email: emailEl.value,
        userImage: imageURL,
        userRole: giveCheckedRadio(),
        uid: UID
    }

    await db.collection('users').doc(UID).set(user);

}


function checkrole(get) {
    let checkrole;
    for (var a = 0; a < get.length; a++) {
        if (get[a].checked) {
            checkrole = get[a].value;
        }
    }
    return checkrole;
}

function updateimg() {
       randomimg[0].src =  '../' + userImageEl.files[0].name
}



function uploadImageToStorage(UID) {
    return new Promise(async (resolve, reject) => {
        let image = userImageEl.files[0];
        let storageRef = storage.ref();
        let imageRef = storageRef.child(`avatar/${UID}/${image.name}`);
        await imageRef.put(image);
        let url = await imageRef.getDownloadURL();
        resolve(url);
    })
}


auth.onAuthStateChanged((user) => {
    console.log(user);
    let pageLocArr = window.location.href.split('/');
    console.log(pageLocArr);
    let pageName = pageLocArr[pageLocArr.length - 1];
    let authenticatedPages = ['home.html', 'findwork.html', 'myjob.html'];
    console.log(authenticatedPages.indexOf(pageName));
    if (user && authenticatedPages.indexOf(pageName) === -1) {
        window.location = './findwork.html';
    }
//     else if(user == null){
//    window.location = './index.html';
//   }
    else if (!user && pageName === 'home.html') {
        window.location = './index.html';
    }
});







async function signout() {
    await auth.signOut();
}



async function signinUser() {
    await auth.signInWithEmailAndPassword(emailEl.value, passwordEl.value);
}