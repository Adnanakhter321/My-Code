
let username2 = document.getElementById('user-name2');
let emailinuser2 = document.getElementById('email2');
let passwordinuser2 = document.getElementById('password2');
let Phoneinuser2 = document.getElementById('Phone');
let Cityinuser2  = document.getElementById('Cityinuser');
let countryinuser2  = document.getElementById('countryinuser');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password2');

async function registerinuser(){
    let db = firebase.firestore();
    try {
        var userCredential = await firebase.auth().createUserWithEmailAndPassword(emailinuser2.value, passwordinuser2.value)
    }
    catch (error) {
        console.log(error);
    }
    let user = userCredential.user;

    console.log('USER CREATED');
   
    let user2 = {
                    Username : username2.value,
                    Email : emailinuser2.value,
                    password: passwordinuser2.value,
                    Phone : Phoneinuser2.value,
                    city: Cityinuser2.value,
                    Country : countryinuser2.value
                }
                console.log(user2);
                try {
                    let db = firebase.firestore();
                    db.collection('userdetails').doc(user.uid).set(user2).then(() => { console.log('done'); 
                    window.location = './userinterfacelogin.html'})
                }
                catch (error) {
                    console.log(error);
                }
}

async function loginuser() {
    try {
        let login = await firebase.auth().signInWithEmailAndPassword(emailEl.value, passwordEl.value);
        window.location = './userinterface.html';
    } catch (error) {
        alert(error);
    }
}