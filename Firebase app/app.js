let userNameEl = document.getElementById('user-name');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');
let passwordRepeatEl = document.getElementById('repeatp');
let userRoleEl = document.getElementsByName('user-role');
let userImageEl = document.getElementById('file');
// let randomimg = document.getElementsByClassName('avatar');

function registeruser(){
    console.log(userNameEl.value,emailEl.value, passwordEl.value, userRoleEl.value,userImageEl.files );

}