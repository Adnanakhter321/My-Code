// // if round bracket so method then property 
// var cities = [ "karachi" , "peshawar" ," sialkot"];
// console.log(cities);
// cities.unshift("isdlam"); //for adding value in start
// cities.push("isdlamabad"); //for adding value in last 
// cities.shift(); //for removing value in start
// cities.pop(); //for removing value in end


//  var num1 = (+prompt("tell a number"));
//  var operater = (prompt("input a operater + or - to add or subract"));
//  var num2 = (+prompt("tell a second number"));

//  if(operater==="+"){
//     console.log("Addition of " +num1+ " + " + num2 + " is "+ num1+num2);
//  }
//  else if(operater==="-"){
//     console.log(num1-num2);
//  }




// var cities = [(prompt("input city one name")),(prompt("input city two name")),(prompt("input city three name")),(prompt("input city four name")),(prompt("input city five name"))];
// //  cities = (prompt("input city one name"));
// //  cities = (prompt("input city two name"));
// //  cities = (prompt("input city three name"));
// //  cities = (prompt("input city four name"));
// //  cities = (prompt("input city five name"));

// console.log(cities);





// var fruits = ["apple", " banana", " cherry", "lemon"];
// fruits.splice(1,1);
// console.log(fruits);



var fruits = ["apple", " banana", " cherry", "lemon"];
fruits.splice(1,2 ,"adnan","adnan2"); // for adding  string in array
console.log(fruits);



var fruits = ["apple", " banana", " cherry", "lemon"];
console.log(fruits);
var ques = prompt("which fruit u want to remove");
if(ques==="apple"){
fruits.splice(0,0);
console.log(fruits);
}
else if(ques==="banana"){
    fruits.splice(1,1);
    console.log(fruits);
}
else if(ques==="cherry"){
    fruits.splice(2,2);
    console.log(fruits);
}
else if(ques==="lemon"){
    fruits.splice(3,3);
    console.log(fruits);
}


