// var p = document.getElementsByTagName('p')
// var index = 0;


// var interval = setInterval(function () {
//     p[index].style.color = 'red';
//     index++;
//     if (index === p.lenght) {
//         clearInterval(interval);
//     }   
// }, 1000);

// console.log(p);





// var pickone =document.getElementsByClassName('pick-one')
// var i;
// for(i= 0 ; i<=pickone.length-1 ; i++){
    // pickone[i].style.fontSize = '30px'
// }
// console.log(pickone)

var a = document.getElementsByTagName('input')
var b = document.getElementsByTagName('div');
var username ,age , quali;
console.log(a[0])

function sendData(){
    username =   a[0].value;
    age = a[1].value;
    quali = a[2].value;
    b[0].style.display = 'none';
    showresult()
}


function showresult(){
     letter();
    // document.getElementById('result').innerHTML = document.getElementById('result').innerHTML + "<h1> Your Age " +age+'</h1>'
    // document.getElementById('result').innerHTML = document.getElementById('result').innerHTML +  "<h1> Qualifications " +quali+'</h1>'
}
function letter(){
    console.log(username[1]);
    for(var i = 1 ; i<= username.length; i++){
      for(var setint = 1000 ;  i <= username.length ; setint + 200){
        setTimeout(
            function() {
                document.getElementById('result').innerHTML = document.getElementById('result').innerHTML + usernam[i]},setint);
      }
    }
}





