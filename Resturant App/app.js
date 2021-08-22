let RestaurantName = document.getElementById('Restaurant-Name');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');
let country = document.getElementById('Country');
let city = document.getElementById('City');




let storage = firebase.storage();
var uid45;
firebase.auth().onAuthStateChanged((user) => {
    uid45 = user.uid;
});
async function registerres() {
    let db = firebase.firestore();
    try {
        var userCredential = await firebase.auth().createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
    }
    catch (error) {
        alert(error);
    }
    let user = userCredential.user;

    console.log('USER CREATED');
    let Restaurantsadmin = {
        RestaurantName: RestaurantName.value,
        Email: emailEl.value,
        Password: passwordEl.value,
        country: country.value,
        city: city.value,
        uid: uid45
    }
    let ResName = {
        RestaurantName: RestaurantName.value,
    }
    console.log(Restaurantsadmin);
    try {
        await db.collection('dataadmin').doc(user.uid).set(Restaurantsadmin);
        await db.collection('ResName').doc(user.uid).set(ResName);
        console.log("Data Submitted");
        if (user) {
            // firebase.auth().signOut(); 
            window.location = './login.html';
        }
    }
    catch (error) {
        alert(error);
    }
}

// async function imageuploadtofirebase(uid) {
//     return new Promise(async (resolve, reject) => {
//         let image = userImageEl.files[0];
//         let storageRef = storage.ref();
//         let imageRef = storageRef.child(`userimages/${uid}/${image.name}`);
//         await imageRef.put(image)
//         console.log('IMAGE UPLOADED');
//         var url = await imageRef.getDownloadURL()
//         resolve(url)
//     })
// }

let user1;
firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    user1 = user.uid;


    firebase.firestore().collection("dataadmin").orderBy(user.uid).onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                console.log("New city: ", change.doc.data());
                let taskobj = change.doc.data()
                taskobj.id = change.doc.data()
                // getthelist(change.doc.data(), change.doc.id)
                console.log(change.doc.data());
            }
        })
    });
    // let pageLocArr = window.location.href.split('/');
    // let pageName = pageLocArr[pageLocArr.length - 1];
    // let authenticatedPages = ['home.html', 'findwork.html', 'myjob.html'];

    // if (user && authenticatedPages.indexOf(pageName) === -1) {
    //     window.location = './login.html';
    //     logout()

    // }
    // else if (!user && pageName === 'home.html') {
    //     window.location = './resturantadminregister.html';
    // }
});

async function loginuser() {
    try {
        let login = await firebase.auth().signInWithEmailAndPassword(emailEl.value, passwordEl.value);
        window.location = './home.html';
    } catch (error) {
        alert(error);
    }
}
function logout() {
    firebase.auth().signOut();
    window.location = './login.html';

}

let cont45 = document.getElementsByClassName('indata')
cont45[1].style.display = 'none'
cont45[2].style.display = 'none'
cont45[3].style.display = 'none'
console.log(cont45);

function accepted(get) {
    console.log(get);
    get.setAttribute("class", "nav-link active");
    console.log(get.parentNode.parentNode.children[1].childNodes[1]);
    get.parentNode.parentNode.children[0].childNodes[1].setAttribute('class', 'nav-link')
    get.parentNode.parentNode.children[2].childNodes[1].setAttribute('class', 'nav-link')
    get.parentNode.parentNode.children[3].childNodes[1].setAttribute('class', 'nav-link')
    cont45[0].style.display = 'none'
    cont45[2].style.display = 'none'
    cont45[3].style.display = 'none'
    cont45[1].style.display = 'inherit'

}

function adddishes(get) {
    get.setAttribute("class", "nav-link active");
    get.parentNode.parentNode.children[0].childNodes[1].setAttribute('class', 'nav-link')
    get.parentNode.parentNode.children[1].childNodes[1].setAttribute('class', 'nav-link')
    get.parentNode.parentNode.children[2].childNodes[1].setAttribute('class', 'nav-link')
    cont45[0].style.display = 'none'
    cont45[1].style.display = 'none'
    cont45[2].style.display = 'none'
    cont45[3].style.display = 'inherit'
}

function pending(get) {
    get.setAttribute("class", "nav-link active");
    console.log(get.parentNode.parentNode.children[1].childNodes[1]);
    get.parentNode.parentNode.children[1].childNodes[1].setAttribute('class', 'nav-link')
    get.parentNode.parentNode.children[2].childNodes[1].setAttribute('class', 'nav-link')
    get.parentNode.parentNode.children[3].childNodes[1].setAttribute('class', 'nav-link')
    cont45[0].style.display = 'inherit'
    cont45[1].style.display = 'none'

}

function Delivered(get) {
    get.setAttribute("class", "nav-link active");
    get.parentNode.parentNode.children[0].childNodes[1].setAttribute('class', 'nav-link')
    get.parentNode.parentNode.children[1].childNodes[1].setAttribute('class', 'nav-link')
    get.parentNode.parentNode.children[3].childNodes[1].setAttribute('class', 'nav-link')
    cont45[0].style.display = 'none'
    cont45[1].style.display = 'none'
    cont45[2].style.display = 'inherit'
    cont45[3].style.display = 'none'

}
let ItemName = document.getElementById('ItemName');
let Price = document.getElementById('Price');
let dishtype = document.getElementById('dishtype');
let deliveryt = document.getElementById('deliverytype');
let imgEl = document.getElementById('file');
let imgEl2 = document.getElementById('image');



async function createdish() {
    const user = firebase.auth().currentUser;
    console.log(user.uid);

    let url = await imageuploadtofirebase();
    let dish = {
        Itemname: ItemName.value,
        Price: Price.value,
        dishtype: checkdish(),
        deliverytype: deliverytype(),
        Imagelink: url,
        RestaurantName: nameget
    }
    try {
        let db = firebase.firestore();
        db.collection('resturantdish').add(dish).then(() => { console.log('done'); })
    }
    catch (error) {
        console.log(error);
    }
}
var nameget;
function getthename(){
    console.log(user1);
    var uid46;
    firebase.auth().onAuthStateChanged((user) => {
        uid46 = user.uid;
        console.log(uid46);
    });
    firebase.firestore().collection("dataadmin").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                // console.log("New city: ", change.doc.data());
                if(change.doc.data().uid == uid46){
                    nameget = change.doc.data().RestaurantName;
                }
            }
        })
    });
}

function fetchall() {
    console.log(user1);
    var uid46;
    firebase.auth().onAuthStateChanged((user) => {
        uid46 = user.uid;
        console.log(uid46);
    });
    firebase.firestore().collection("dataadmin").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                // console.log("New city: ", change.doc.data());
                if(change.doc.data().uid == uid46){
                    nameget = change.doc.data().RestaurantName;
                }
            }
        })
    });
}


async function imageuploadtofirebase() {
    return new Promise(async (resolve, reject) => {
        let image = imgEl.files[0];
        let storageRef = storage.ref();
        let imageRef = storageRef.child(`userimages/${image.name}`);
        await imageRef.put(image)
        console.log('IMAGE UPLOADED');
        var url = await imageRef.getDownloadURL()
        resolve(url)
    })
}

function checkdish() {
    let checkrole;
    for (var a = 0; a < dishtype.length; a++) {
        if (dishtype[a].selected) {
            checkrole = dishtype[a].value;
        }
    }
    return checkrole;
}
function deliverytype() {
    let checkrole;
    for (var a = 0; a < deliveryt.length; a++) {
        if (deliveryt[a].selected) {
            checkrole = deliveryt[a].value;
        }
    }
    return checkrole;
}

function changeimage() {
    console.log(imgEl.files[0].name);
    imgEl2.src = imgEl.files[0].name;
}

// let username2 = document.getElementById('user-name2');
// let emailinuser2 = document.getElementById('email2');
// let passwordinuser2 = document.getElementById('password2');
// let Phoneinuser2 = document.getElementById('Phone');
// let Cityinuser2  = document.getElementById('Cityinuser');
// let countryinuser2  = document.getElementById('countryinuser');