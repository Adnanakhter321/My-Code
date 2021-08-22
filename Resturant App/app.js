let RestaurantName = document.getElementById('Restaurant-Name');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password2');
let country = document.getElementById('Country');
let city = document.getElementById('City');




let storage = firebase.storage();

async function registeruser() {
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
        city: city.value
    }
    console.log(Restaurantsadmin);
    try {
        await db.collection('dataadmin').doc(user.uid).set(Restaurantsadmin);
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


firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
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
let imgEl  = document.getElementById('file');
let imgEl2  = document.getElementById('image');


async function createdish(){
    const user = firebase.auth().currentUser;
    console.log(user.uid);
    
  let url =  await imageuploadtofirebase();
    let dish = {
        Itemname : ItemName.value,
        Price : Price.value,
        dishtype : checkdish(),
        deliverytype : deliverytype(),
        Imagelink : url
    }
    try {
        let db = firebase.firestore();
        db.collection('resturantdish').add(dish).then(() => { console.log('done'); })
    }
    catch (error) {
        console.log(error);
    }
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

function changeimage(){
    console.log(imgEl.files[0].name);
    imgEl2.src  = imgEl.files[0].name;
}

let username2 = document.getElementById('user-name2');
let emailinuser2 = document.getElementById('email2');
let passwordinuser2 = document.getElementById('password2');
let Phoneinuser2 = document.getElementById('Phone');
let Cityinuser2  = document.getElementById('Cityinuser');
let countryinuser2  = document.getElementById('countryinuser');


function registerinuser(){
    console.log(passwordinuser2);
    // let user2 = {
    //                 Username : username2.value,
    //                 Email : emailinuser2.value,
    //                 password: passwordinuser2.value,
    //                 Phone : Phoneinuser2.value,
    //                 city: Cityinuser2.value,
    //                 Country : countryinuser2.value
    //             }
    //             console.log(user2);
}
// async function registerinuser(){


//     let db = firebase.firestore();
//     try {
//         var userCredential = await firebase.auth().createUserWithEmailAndPassword(emailinuser.value, passwordinuser.value)
//     }
//     catch (error) {
//         console.log(error);
//     }
//     let user = userCredential.user;

//     console.log('USER CREATED');
//         let user2 = {
//             Username : user.value,
//             Email : emailinuser.value,
//             password: passwordinuser.value,
//             Phone : Phoneinuser,
//             city: Cityinuser,
//             Country : countyinuser
//         }
//         console.log(user);
//         console.log(Restaurantsadmin);
//         try {
//             await db.collection('userdata').doc(user.uid).set(user2);
//             console.log("Data Submitted");
//             if (user) {
//                 // window.location = './login.html';
//             }
//         }
//         catch (error) {
//             console.log(error);
//         }
// }
