let userNameEl = document.getElementById('user-name');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');
let passwordRepeatEl = document.getElementById('repeatp');
let userRoleEl = document.getElementsByName('user-role');
let userImageEl = document.getElementById('file');


function registerUser() {
    console.log('user');
    let list = {
        username = userNameEl.value,
        Email = emailEl.value,
        Password = passwordEl.value,
        RepeatPass = passwordRepeatEl.value,
        UserRole = userRoleEl.value,
        userImage  = userImageEl.file[0]
    }
    console.log(list);
}