
// function generateRandomNum() {
//     var num = Math.ceil(Math.random() * 10);
//     return num % 2 === 0 ? true : false;
// }

// var oddOrEven = generateRandomNum() ? "Even" : "Odd";









// if (num % 2 === 0) {
//     return true;
// }
// else {
//     return false;
// }

// var oddOrEven; // "Odd" || "Even"
// if (generateRandomNum()) {
//     oddOrEven = 'Even';
// }
// else{
//     oddOrEven = 'Odd';
// }






























// var greet = document.getElementById('greet');

// (true || false && true) ?
//     (
//         greet.innerHTML = "Hello User"

//     ) : (
//         greet.innerHTML = "Hello Ternery"
//     )















































// function cookDessert(desertName) {
//     console.log('bring me ' + desertName);
// }

// function cookFood(cb) {
//     console.log('Bring some food');    
//     cb('cake');
// }

// cookFood(cookDessert);

















// function cookFood(cb) {
//     console.log('Bring some food');
//     cb('cake');
// }

// cookFood(function (desertName) {
//     console.log('bring me ' + desertName);
// });































// var i = 0;

// function printI() {
//     console.log('This is ' + i + ' time.');
//     i++;
//     if (i === 10) {
//         clearInterval(printInterval);
//     }
// }
// var printInterval = setInterval(printI, 300);








var secondsValue = document.getElementById('seconds');
var minutesValue = document.getElementById('minutes');
var timerInterval;

function startTimer() {
    timerInterval = setInterval(function () {
        var seconds = Number(secondsValue.innerHTML);
        if (seconds < 60) {
            secondsValue.innerHTML = Number(secondsValue.innerHTML) + 1;
        }
        else {
            secondsValue.innerHTML = 0;
            minutesValue.innerHTML = Number(minutesValue.innerHTML) + 1;
        }
    }, 1000);
}







