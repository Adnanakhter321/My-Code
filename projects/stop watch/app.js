


// setInterval(function(){
//     console.log("running...")
// },500)


var minHead=document.getElementById('min')
var secHead=document.getElementById('sec')
var msecHead=document.getElementById('msec')
var Disable=document.getElementById('disable')

var min=0
var sec=0
var msec=0
var Interval;

function timer(){
    msec++
    msecHead.innerHTML=msec
    if(msec==100){
        sec++
        secHead.innerHTML=sec
        msec=0
    }
   
    else if(sec==5){
        min++
        minHead.innerHTML=min
        sec=0
    }
}
function start(){
    Interval=setInterval(timer,10)
    Disable.disabled=true
}
function pause(){
    clearInterval(Interval)
    Disable.disabled=false

}
function reset(){
    msec=0
    sec=0
    min=0

    msecHead.innerHTML=msec
    secHead.innerHTML=sec
    minHead.innerHTML=min

    clearInterval(Interval)
    Disable.disabled=false

}