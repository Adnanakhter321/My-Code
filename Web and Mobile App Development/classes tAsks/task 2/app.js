var a = ['#840f0f', '#c72424', '#ef1414', '#ff6464']
var b = ['voilet', 'purple', 'zebra', 'brown']
var c = ['red', 'blue', 'yellow', 'pink']
var d = ['red', 'blue', 'yellow', 'pink']
console.log(a[1])
var e = 0;


document.getElementsByTagName('div')[2].style.display = 'none'
document.getElementsByTagName('div')[3].style.display = 'none'
document.getElementsByTagName('div')[4].style.display = 'none'

document.getElementsByTagName('div')[1].style.backgroundColor = "red";


setInterval(function () {
    console.log(e)
    document.getElementsByTagName('div')[1].style.backgroundColor = a[e];
    e = e + 1;
    console.log(e)
    if(e===3){
        e = 0;
    }
},500)
