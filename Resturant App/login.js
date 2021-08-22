let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');

async function loginuser() {
    try {
        let login = await firebase.auth().signInWithEmailAndPassword(emailEl.value, passwordEl.value)

    } catch (aerror) {
        alert(error);
    }
}
firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    // window.location = './home.html';
});
if(user){
}
