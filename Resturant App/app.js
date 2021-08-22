let RestaurantName = document.getElementById('Restaurant-Name');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');
let country = document.getElementById('Country');
let city = document.getElementById('City');




// let storage = firebase.storage();

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
   if(user){
    window.location = './login.html';
   }
        firebase.auth().signOut(); 
    
});



async function loginuser() {
    try {
        let login = await firebase.auth().signInWithEmailAndPassword(emailEl.value, passwordEl.value);
        // window.location = './home.html'

    } catch (error) {
        alert(error);
    }
}
function logout() {
    firebase.auth().signOut();
}