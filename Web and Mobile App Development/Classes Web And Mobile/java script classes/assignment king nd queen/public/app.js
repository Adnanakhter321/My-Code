var m = document.getElementById("img1");
var j = document.getElementById("img2");
var k = document.getElementById("img3");
var n = document.getElementById("score");
// var p = document.getElementById("highscore");
var localvar = 0;
var q = document.getElementById('score2');

var randomNumber = Math.ceil(Math.random() * 3);


function random() {

    randomNumber = Math.ceil(Math.random() * 3);;
    console.log(randomNumber)
}


function scoreadd() {
    n.innerHTML = Number(n.innerHTML) + 1;
    // if (n.innerHTML > p.innerHTML) {
    //     p.innerHTML = Number(p.innerHTML) + 1;
    // }
}


function ifwrong() {
    setTimeout(function () {
        m.src = './images/back.png';
        j.src = './images/back.png';
        k.src = './images/back.png';
    }, 500);
    random();
}
console.log(q.innerHTML)

function userpick(num) {
    findwhite();
    if (num === randomNumber) {
        scoreadd();

        jackandqueen();

        restart();
    }
    else {
        jackandqueen();
        restart();
        q.innerHTML = Number(q.innerHTML) + 1;
    }
}

function jackandqueen() {
    if (randomNumber === 1) {
        j.src = './images/queen.jpg';
        k.src = './images/jack.png';
    }
    else if (randomNumber === 2) {
        m.src = './images/jack.png';
        k.src = './images/queen.jpg';
    }
    else if (randomNumber === 3) {
        m.src = './images/queen.jpg';
        j.src = './images/jack.png';
    }
   
} 




function findwhite() {
    if (randomNumber === 1) {
        m.src = './images/king.png';
    }
    else if (randomNumber === 2) {
        j.src = './images/king.png';
    }
    else if (randomNumber === 3) {
        k.src = './images/king.png';
    }
}
function reset() {
    n.innerHTML = 0;
    q.innerHTML = 0;
}


function restart() {
    setTimeout(function () {
        m.src = './images/back.png';
        j.src = './images/back.png';
        k.src = './images/back.png';
    }, 1500);
    random();
}






