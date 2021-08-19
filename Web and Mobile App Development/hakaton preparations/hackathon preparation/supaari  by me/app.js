
let db = firebase.firestore();
let userNameEl = document.getElementById('user-name');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');
let passwordRepeatEl = document.getElementById('repeatp');
let userRoleEl = document.getElementsByName('user-role');
let userImageEl = document.getElementById('file');
let randomimg = document.getElementsByClassName('avatar');
function registeruser() {
    let imageURL = uploadImageToStorage();
    let list = {
        username: userNameEl.value,
        Email: emailEl.value,
        Password: passwordEl.value,
        RepeatPass: passwordRepeatEl.value,
        UserRole: checkrole(),
        userImage: url
    }
    console.log(list); 
   let data =  db.collection('form').add(list)
            .then((multipledocs) => {
                console.log(multipledocs, 'none' );
                console.log(data.data());
            });
}
let url;
function uploadImageToStorage() {
        let image = userImageEl.files[0];
        let storageRef = storage.ref();
        let imageRef = storageRef.child(`avatar/${imageuid}/${image.name}`);
        imageRef.put(image);
        url = imageRef.getDownloadURL();
        resolve(url);
   
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

function updateimg() {
       randomimg[0].src =  '../' + userImageEl.files[0].name
}
let imageuid;
function fetchall() {
    db.collection("form").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                // console.log("New city: ",   change.doc.data());
                let taskobj = change.doc.data()
                taskobj.id = change.doc.data() 
                // getthelist(change.doc.data(), change.doc.id)
                console.log(change.doc.data(), change.doc.id);
                imageuid = change.doc.id;
            }
            if (change.type === "removed") {
                // console.log("Removed city: ", change.doc.id);
                // deleteindom(change.doc.id)
            }
            if (change.type === "modified") {
                // console.log("Modified city: ", change.doc.data());
                // let tasksObj = change.doc.data();
                // console.log(change.doc.data());
                // tasksObj.id = change.doc.id;
                // updateindom(tasksObj);
            }
        })
    });
}