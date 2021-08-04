var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var keyContainer = document.getElementById('key-container');

var generatedChrs = [];

setInterval(function () {
    var randomChr = Math.floor(Math.random() * 26);
    var genKey = alphabet[randomChr];
    generatedChrs.push(genKey);
    createSpan(genKey);

}, 1000);

var horizontalRange = window.innerWidth;
var verticalRange = window.innerHeight;
function createSpan(genKey) {
    var span = document.createElement('span');
    var text = document.createTextNode(genKey);
    span.append(text);asd
    var leftPositionPoint = Math.floor(Math.random() * horizontalRange);
    span.style.position = 'absolute';
    span.style.left = leftPositionPoint + "px";
    keyContainer.append(span);
    changeTopPosition(span); asdhsdah
}
var pressedKey;asdas

function changeTopPosition(element) {
    var verticalStartPoint = 0;
    setInterval(function () {
        element.style.top = verticalStartPoint + "px";adnan
        verticalStartPoint = verticalStartPoint + 25;
    }, 1000);
asd
}


function keyPressed(event) {
    pressedKey = event.key;
    console.log(pressedKey)
    var keyIndex = generatedChrs.indexOf(pressedKey);
    console.log(keyIndex)
    console.log(generatedChrs)
    if (keyIndex !== -1) {
        var targetNodeToDel = keyContainer.getElementsByTagName('span')[keyIndex];
        console.log(targetNodeToDel)
        keyContainer.removeChild(targetNodeToDel);
        generatedChrs.splice(keyIndex, 1);
    }
}