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
document.getElementById('checkpass').style.display = 'none'
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
    if (getthepass.value=== pass && list.value !== '') {
        var details = {
            name: list.value,
            date: new Date()
        }

        db.collection('data').add(details)
            .then((multipledocs) => {
                console.log(multipledocs, 'none');
            });
    }
    else{
        alert("We cant Add Document Because Your Password is Wrong...! OR Text Is NULL")
    }

}
function fetchall() {
    db.collection("data").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                // console.log("New city: ",   change.doc.data());
                getthelist(change.doc.data())
            }
            // if (change.type === "modified") {
            //     console.log("Modified city: ", change.doc.data());
            // }
            // if (change.type === "removed") {
            //     console.log("Removed city: ", change.doc.data());
            // }
        })
    });
}

let ol = document.getElementById('orderedlist')

function getthelist(data) {
    let li = document.createElement("li")
    let name = document.createTextNode('List-Name: ')
    li.appendChild(name)
    let node = document.createTextNode(data.name)
    li.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    li.style.fontWeight = "bold"
    // li.style.display = 'none'
    li.appendChild(node)
    ol.appendChild(li)

    //  let li2 = document.createElement("li")
    //  let date = document.createTextNode('Date: ')
    //  li2.appendChild(date)
    // let node2 = document.createTextNode(data.date)
    // li2.appendChild(node2)
    // ol.appendChild(li2)

}

function checkpassword(){
document.getElementById('checkpass').style.display = 'block'

}