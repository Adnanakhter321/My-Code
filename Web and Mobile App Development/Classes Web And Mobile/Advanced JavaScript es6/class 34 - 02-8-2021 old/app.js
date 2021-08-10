// var usernameel = document.getElementById('username');
// var emailel = document.getElementById('email');
// var passwordel = document.getElementById('password');
// var div = document.getElementsByTagName('div')[0];
// var div2 = document.getElementsByTagName('div')[1];
// div2.style.display = 'none'
// var emailel2 = document.getElementById('email2');
// var passwordel2 = document.getElementById('password2');
// var div3 = document.getElementsByTagName('div')[2];
// div3.style.display = 'none'
// // var errorel = document.getElementsByTagName(span)[0];
// var fgpass = document.getElementById('fgpass');


// function reg() {
//     console.log(emailel.value, passwordel.value)
//     firebase.auth().createUserWithEmailAndPassword(emailel.value, passwordel.value)
//         .then((userCredential) => {
//             fetchUsers();

//             // Signed in 
//             var user = userCredential.user;
//             // errorel.innerHTML = "Succesfully Registered"
//             // setTimeout(function () {
//             //   errorel.innerHTML = ""
//             // }, 3000)
//             var dataToSave = {
//                 email: user.email,
//                 userName: usernameel.value,
//                 UID: user.uid
//             }

//             saveUserInFirestore(dataToSave);


//             // alert('DONE')
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // alert(errorMessage)
//             // alert("Error: " + errorMessage)
//             // errorel.innerHTML = "Note: " + errorMessage
//             // setTimeout(function () {
//             //   errorel.innerHTML = ""
//             // }, 3000)
//         });
// }

// // firebase.auth().onAuthStateChanged((user) => {
// //     console.log(user, '*********************');
// //     if (user) {
// //         // User is signed in, see docs for a list of available properties
// //         // https://firebase.google.com/docs/reference/js/firebase.User
// //         var uid = user.uid;
// //         // ...
// //     } else {
// //         // User is signed out
// //         // ...

// //     }
// // });


// function loginpage() {
//     div.style.display = 'none'
//     div2.style.display = 'block'
//     div3.style.display = 'none'
// }
// function regpage() {
//     div.style.display = 'block'
//     div2.style.display = 'none'
// }
// function forgotpass() {
//     div3.style.display = 'block'
//     div2.style.display = 'none'

// }

// function login() {
//     firebase.auth().signInWithEmailAndPassword(emailel2.value, passwordel2.value)
//         .then((userCredential) => {
//             // Signed in
//             var user = userCredential.user;
//             // errorel.innerHTML = "Succesfully Login"
//             // setTimeout(function () {
//             //   errorel.innerHTML = ''
//             // }, 3000)
//             fetchUsers();
//             alert("DONE")
//             window.location = "./home.html";
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             alert(errorMessage)
//             // errorel.innerHTML = "Note: " + errorMessage
//             // setTimeout(function () {
//             //   errorel.innerHTML = ''
//             // }, 3000)
//         });
// }

// function submit() {
//     console.log(fgpass.value)
//     firebase.auth().sendPasswordResetEmail(fgpass.value)
//         .then(() => {
//             alert('email sent')
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             alert('Error: ' + errorMessage)
//         })
// };




// function logout() {
//     firebase.auth().signOut()
//         .then(() => {
//             // fetchUsers();
//             window.location = './index.html';
//         })
// }


//     let db2 = firebase.firestore();

//     function saveUserInFirestore(userToSave) {
//     // firebase.firestore().collection("users").add(userToSave)
//     //     .then((docRef) => {
//     //         console.log("Document written with ID: ", docRef.id);
//     //     })


//     db2.collection('users').doc(userToSave.UID).set(userToSave);


//     // db.collection("users").doc("SaylaniTeacherHaider")
//     //     .update({
//     //         teacher: false
//     //     })
//     //     .then(() => {
//     //         console.log("Document successfully updated!");
//     //     })
//     //     .catch((error) => {
//     //         // The document probably doesn't exist.
//     //         console.error("Error updating document: ", error);
//     //     });;



// }
// firebase.auth().onAuthStateChanged((user) => {
//     console.log(user, '*********************');
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User

//         fetchUsers();
//         // ...
//     } else {
//         // User is signed out
//         // ...

//     }
// })

// let db = firebase.firestore();
// function fetchUsers() {

//     var uid = firebase.auth().currentUser.uid;
//     console.log(uid);
//     var docRef = db.collection("users").doc(uid);

//     docRef.get().then((doc) => {
//         if (doc.exists) {
//             console.log("Document data:", doc.data());
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//     }).catch((error) => {
//         console.log("Error getting document:", error);
//     });







//     // db.collection("users")
//     //     .get()
//     //     .then((multipledocs) => {
//     //         console.log(multipledocs, '******************');

//     //         multipledocs.forEach((user) => {
//     //             console.log(user.data(), 'inside for each loop', user.id);
//     //         });

//     //     }).catch((error) => {
//     //         console.log("Error getting document:", error);
//     //     });

// }

let getthepass = document.getElementById("getthepass")
// document.getElementById('checkpass').style.display = 'none'
function hide(){document.getElementById('checkpass').style.display = 'none'}

let pass;
let db = firebase.firestore();
var docRef = db.collection("Password").doc("1neQO5zQv7XDgIbFMI1c");
docRef.get().then((doc) => {
    if (doc.exists) {
        // console.log("Document data:", doc.data());
        pass = doc.data().password;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});





var list = document.getElementById('list-item')

function add() {
    // if (getthepass.value=== pass && list.value !== '') {
        var details = {
            name: list.value,
            date: new Date()
        }

        db.collection('data').add(details)
            .then((multipledocs) => {
                console.log(multipledocs, 'none');
            });
        // }
    // else{
    //     alert("We cant Add Document Because Your Password is Wrong...! OR Text Is NULL")
    // }

}
function fetchall() {
    db.collection("data").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                console.log("New city: ",   change.doc.data());
                let taskobj = change.doc.data()
                taskobj.id = change.doc.data() 
                getthelist(change.doc.data(), change.doc.id)
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.id);
                deleteindom(change.doc.id)
            }
                if (change.type === "modified") {
                    console.log("Modified city: ", change.doc.data());
                    let tasksObj = change.doc.data();
                        tasksObj.id = change.doc.id;
                        edit(tasksObj);
                }
        })
    });
}

let ol = document.getElementById('orderedlist')

function getthelist(data ,task) {
    let delt  = document.createElement('button')
    
    let txtnode = document.createTextNode('Delete')
    let edit = document.createElement('button')
    let editnode = document.createTextNode('Edit')
    edit.setAttribute('class', 'btn btn-primary btn-sm')
    edit.appendChild(editnode)
    delt.appendChild(txtnode)
    delt.setAttribute('class', 'btn btn-primary btn-sm')
    let li = document.createElement("li")
    // let name = document.createTextNode('List-Name: ')
    // li.appendChild(name)
    let node = document.createTextNode(data.name)
    li.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    li.style.fontWeight = "bold"
    // li.style.display = 'none'

    li.appendChild(node)
    li.appendChild(delt)
    delt.setAttribute('onclick' , 'removeelement(this)')
    edit.setAttribute('onclick' , 'edit(this)')
    li.appendChild(edit)
    li.setAttribute('id' , task)
    ol.appendChild(li)
}

function checkpassword(){
document.getElementById('checkpass').style.display = 'block'
}

function removeelement(get){
    db.collection("data").doc(get.parentNode.id).delete();
}
function deleteindom(gettheid){
    let element = document.getElementById(gettheid)
    element.parentNode.removeChild(element)
}
let idofelement;
let EL;
function edit(element) {
    var input = document.createElement('input');
    var save = document.createElement('button');
    var savevalue = document.createTextNode('save')
    save.setAttribute("onclick", "save(this)")
    save.setAttribute('class', 'btn btn-primary btn-sm')
    save.style.marginBottom = '6px'
    save.appendChild(savevalue)
    input.setAttribute('type', 'text');
    console.log(element.parentNode);
    // console.log(element.previousSibling.previousSibling.nodeValue.length);
    input.setAttribute('size', element.previousSibling.previousSibling.nodeValue.length);
    input.setAttribute('class', 'inputforedit')
    input.value = element.parentNode.firstChild.nodeValue;
    element.parentNode.appendChild(input)
    element.parentNode.appendChild(save)
    def = element.parentNode;
    // def.childNodes[0].style.display = 'none'
    def.childNodes[1].style.display = 'none'
    def.childNodes[2].style.display = 'none'
}
function save(element2) {
    db.collection('data').doc(element2.parentNode.id).update({ name : element2.previousSibling.value});
    element2.parentNode.childNodes[1].style.display = 'inline'
    element2.parentNode.childNodes[2].style.display = 'inline'
    element2.parentNode.removeChild(element2.previousSibling)
    element2.parentNode.removeChild(element2)
}

function updateindom(el){
    console.log(el);
    let el3 = document.getElementById(el.id);
    console.log(el3.firstChild.nodeValue);
    el3.firstChild.nodeValue = el.name;
}