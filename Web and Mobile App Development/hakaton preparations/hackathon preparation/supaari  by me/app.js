let userNameEl = document.getElementById('user-name');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');
let passwordRepeatEl = document.getElementById('repeatp');
let userRoleEl = document.getElementsByName('user-role');
let userImageEl = document.getElementById('file');
let randomimg = document.getElementsByClassName('avatar');
console.log(randomimg[0]);
function registeruser() {
    let list = {
        username: userNameEl.value,
        Email: emailEl.value,
        Password: passwordEl.value,
        RepeatPass: passwordRepeatEl.value,
        UserRole: checkrole(userRoleEl),
        userImage: userImageEl.files[0]
    }
    console.log(list);
}


function checkrole(get) {
    let checkrole;
    for (var a = 0; a < get.length; a++) {
        if (get[a].checked) {
            checkrole = get[a].value;
        }
    }
    return checkrole;
}

function updateimg() {
       console.log(userImageEl.files[0].name);
       randomimg[0].src = './userImageEl.files[0].name'
}