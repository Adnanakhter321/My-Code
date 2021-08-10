// var p = document.getElementById("para");
// function add() {
//  p.innerHTML = Number(p.innerHTML) + 1;
// }
// function subtract() {
//     p.innerHTML = Number(p.innerHTML) - 1;
// }

// function resetvalue(){
//     p.innerHTML = 0;
//     j.value = 0;
//     l.value = 0;
//     k.value = 0;
// }




// var j = document.getElementById("getnum");
// var k = document.getElementById("getnum2");
// var l = document.getElementById("getnum3");


// j.value  = 0;
// k.value = 0 ;
// l.value = 0 ;
// function getnumber () {
//     p.innerHTML = Number( j.value) + Number( p.innerHTML);
// }

// function getnumber2 () {
//     p.innerHTML = Number( p.innerHTML) -  Number( k.value) ;
// }

// function getnumber3 () {
//     p.innerHTML = Number( p.innerHTML) *  Number( l.value) ;
// }











var counter = document.getElementById('counter-value');

var changeCounterForm = document.getElementById('counter-change-value');
var changeCounterValue = 1;

changeCounterForm.value = changeCounterValue;

function addCounter() {
    counter.innerHTML = Number(counter.innerHTML) + changeCounterValue;
}

function minusCounter() {
    counter.innerHTML = Number(counter.innerHTML) - changeCounterValue;
}

function changeCounterVariable() {
    changeCounterValue = Number(changeCounterForm.value);
}
