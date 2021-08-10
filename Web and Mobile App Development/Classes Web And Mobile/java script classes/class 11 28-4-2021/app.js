
// var today = new Date();
// console.log(today);

var today = new Date();
console.log(today.getFullYear);

// var today = new Date();
// var month = ['jan' , 'feb' , 'march', 'april', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'];
// var months = today.getMonth();
// // months = 11;
// console.log(month[months ]);

// this is the real time when the operation is perofrming
// var getmili = console.log(today.getTime());

// new Date (1619410691206);
// Mon Apr 26 2021 09:18:11 GMT+0500 (Pakistan Standard Time)

// new Date
// Mon Apr 26 2021 09:18:57 GMT+0500 (Pakistan Standard Time) {}

// var birth = new Date("Sep 02 2001 16:24:26");
// console.log(birth);
// console.log(birth.getTime());
// var day = ['mon' ,'tue' ,'wed']
// ];
// console.log(birth.getDay());




// how many days remaining for my birthday program 

// var birth = new Date("Sep 02 2021 16:24:26");
// var sec = new Date ();
// console.log(birth);
// console.log(sec);
// var remainingdays = birth - sec;
// console.log(remainingdays);
// var ream = remainingdays / (1000 *60*60*24);
// console.log(Math.floor(ream));

//------------------------------------------------------------------------------------------


// function food(){
//     console.log("tea");
//     console.log("egg");
//     console.log("drink");
// }


// function food(meat , desert){
//     console.log("tea" + meat);
//     console.log("egg" + desert);

// }
// food(" beef" , " gulab jamun");
// food(" mutton" , " gulab jamun");



// function add(){
// console.log(2 + 5);
// }
// add();

// var number1
// function add(number1 , number2){
// console.log(number1 + number2);
// }
// add();



// function areacalculate(number1 , number2){
//     var length = +prompt("enter length");
//     var width = +prompt("enter width");
// console.log("Area is " + length * width);
// }
// areacalculate();





// function areacalculate(length , width){
// console.log("Area is " + length * width);
// }
// areacalculate(+prompt("enter length") , +prompt("enter width") );






// function areacalculate(num1 , num2){

// for(num1 ;num1 <= num2 ; num1++ ){
// console.log(num1);
// }
// }

// areacalculate(+prompt("Enter starting number") , +prompt("Enter ending number") );





//  var num = Math.sqrt(4); // for square root
//  console.log(num);



function hyp(num1 , num2){

    console.log(Math.floor(Math.sqrt((num1 * num1) + (num2 * num2))) );
}

hyp(+prompt("enter a value") , +prompt("enter b value") );
