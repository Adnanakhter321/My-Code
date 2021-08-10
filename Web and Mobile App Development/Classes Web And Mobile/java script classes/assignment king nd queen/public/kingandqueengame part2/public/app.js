var m = document.getElementById("img1");
var j = document.getElementById("img2");
var k = document.getElementById("img3");
var l = document.getElementById("img4");
var n = document.getElementById("score")
var p = document.getElementById("highscore")
var localvar = 0;

var randomNumber = Math.ceil(Math.random() * 4);
// var  randomNumber; 
// console.log(randomNumber)
// console.log(n.innerHTML)
console.log(randomNumber)
// console.log(highscore)

function random() {

    randomNumber = Math.ceil(Math.random() * 4);;
    console.log(randomNumber)
}


function findwhite() {
    if (randomNumber === 1) {
        m.src = './images/queen.jpg';
    }
    else if (randomNumber === 2) {
        j.src = './images/queen.jpg';

    }
    else if (randomNumber === 3) {
        k.src = './images/queen.jpg';

    }
    else if (randomNumber === 4) {
        l.src = './images/queen.jpg';

    }
}


function scoreadd() {
    n.innerHTML = Number(n.innerHTML) + 1;
if(n.innerHTML > p.innerHTML){
    p.innerHTML = Number(p.innerHTML) + 1;
}
}

localStorage.setItem('high-score', localvar);
var highscore = Number(localStorage.getItem('high-score'));
highscore++;
console.log(highscore)


function ifwrong() {
    setTimeout(function () {
        m.src = './images/1.jpg';
        j.src = './images/2.jpg';
        k.src = './images/3.jpg';
        l.src = './images/4.jpg';
    }, 500);
    random();
    ifwrongreset();
}






function img1click() {
    findwhite();
    if (randomNumber === 1) {
        scoreadd();
        restart();
    }
    else {
        setTimeout(ifwrong, 1000);
        n.innerHTML = Number(n.innerHTML) - 1;
    }

}



function img2click() {
    findwhite();
    if (randomNumber === 2) {
        scoreadd();
        restart();
    }
    else {
        setTimeout(ifwrong, 1000);
        n.innerHTML = Number(n.innerHTML) - 1
    }

}

function img3click() {
    findwhite();
    if (randomNumber === 3) {
        scoreadd();
        restart();
    }
    else {
        setTimeout(ifwrong, 1000);

        n.innerHTML = Number(n.innerHTML) - 1
    }

}

function img4click() {
    findwhite();
    if (randomNumber === 4) {
        scoreadd();
        restart();
    }
    else {  
        setTimeout(ifwrong, 1000);
        n.innerHTML = Number(n.innerHTML) - 1
    }

}
function reset() {
    localStorage.clear()
    p.innerHTML = 0;
}
function ifwrongreset() {
 
   n.innerHTML = 0;
}



function restart() {
    setTimeout(function () {
        m.src = './images/1.jpg';
        j.src = './images/2.jpg';
        k.src = './images/3.jpg';
        l.src = './images/4.jpg';
    }, 1000);
    random();
}






