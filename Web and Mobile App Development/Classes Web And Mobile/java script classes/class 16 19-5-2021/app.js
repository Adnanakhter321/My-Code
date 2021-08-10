// function generateRandomnum (){
//     var num = Math.ceil(Math.random() * 10 );
//     return num % 2 === 0? true : false ;

//     // if(num % 2 === 0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
// }

// var OddorEven =  generateRandomnum ()? "even" : "odd" ;
// console.log(OddorEven);





//PASS FUNCTION BY PARAMETER
// var cookdesert(desert){
//     consolge.log("bring" + desert);
// }
// var someFood(cb){
//     console.log("bring some food");
//     cb("cake");
// }

// someFood(cookdesert);









// var i = 0;
// function printi(){
//     console.log("this is " + i + " times") ;
//     i++;
//     if(i === 16){
//         clearInterval(interval);
//     }
// }
// var interval = setInterval(printi  , 1000);


var screen = document.getElementById("mainscreen");
var min = document.getElementById("minutes");
var timeint;

function startcount() {
    screen.innerHTML = Number(screen.innerHTML) + 1;
    timeint = setInterval(startcount, 1000);
    if (screen.innerHTML === 60) {
        screen.innerHTML = 0;
        min.innerHTML = Number(min.innerHTML) + 1;
    }
}



function stopcount() {
    ;
    clearInterval(timeint);
}

