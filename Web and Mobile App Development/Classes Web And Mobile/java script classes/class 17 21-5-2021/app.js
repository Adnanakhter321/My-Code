// var name;
// setTimeout(function (){
//   name =    prompt(
//         "ENter Your name"
//     );
//  alr();
// } , 3000);


// function alr(){
//     alert("your name is " + name);
// }



var chngim = document.getElementById("changename");
var ab1 = true ; 
function img(){
    
    if(ab1){
        chngim.src = ./images/download.jpg;
        ab1 = false;
    }
    else {
        chngim.src = ./images/e9291cc39e820cd4afc6e58618dfc9e0.jpg;
        ab1 = true;
    }
}