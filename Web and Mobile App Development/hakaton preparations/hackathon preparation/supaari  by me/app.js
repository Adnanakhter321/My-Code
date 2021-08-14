let userNameEl = document.getElementById('user-name');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');
let passwordRepeatEl = document.getElementById('repeatp');
let userRoleEl = document.getElementsByName('user-role');
let userImageEl = document.getElementById('file');
let randomimg = document.getElementsByClassName('avatar');
function registeruser() {
    let list = {
        username: userNameEl.value,
        Email: emailEl.value,
        Password: passwordEl.value,
        RepeatPass: passwordRepeatEl.value,
        UserRole: checkrole(),
        userImage: userImageEl.files[0]
    }
    console.log(list);
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