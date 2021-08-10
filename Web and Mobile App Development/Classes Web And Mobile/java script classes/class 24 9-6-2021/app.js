// localStorage.setItem('name' , 'adnan')
// var value = localStorage.getItem('name')
// console.log(value)




var obj = {
    email : 'adnancoc12@gmail.com',
    password: 'gaaa'
}
// local storage saves only strings we have to convert obj or array to string for stroing in local storage

localStorage.setItem('user' , JSON.stringify(obj));
var value = localStorage.getItem('user')
console.log(value)

var value = JSON.parse(localStorage.getItem('user'));
console.log(value)


