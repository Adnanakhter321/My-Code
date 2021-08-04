var maindiv = document.getElementById('maindiv');
console.log(maindiv)
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var arrayof = []
setInterval(function () {
    var randomchar = Math.floor(Math.random() * 25)
    var randomalphabets = alphabet[randomchar]
    arrayof.push(randomalphabets)
    createSpan(randomalphabets);
}, 1000);


function createSpan(element){
    var random = Math.ceil(Math.random() * window.innerWidth)
    var create = document.createElement('span');
    var text = document.createTextNode(element)
    create.appendChild(text)
    // console.log(random)
    create.style.position = 'absolute'
    create.style.left = random + "px"
    maindiv.appendChild(create)
    setposition(create,element)
}
function setposition(element,a2){
    var position = 25;
    console.log(position)
   setInterval(function(){
    element.style.top = position + 'px'
    position = position + 25;
    var a = maindiv.getElementsByTagName('span')[indexOf(element)]
    console.log(a)
    // if(position > window.innerHeight.){
    //     var a = document.getElementsByTagName('span')[]
    // }

   },1000)
}
