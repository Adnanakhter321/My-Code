
// var today = new Date();
// console.log(today);

// var today = new Date();
// console.log(today.getSeconds());

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

var birth = new Date("Sep 02 2021 16:24:26");
var sec = new Date ();
console.log(birth);
console.log(sec);
var remainingdays = birth - sec;
console.log(remainingdays);
var ream = remainingdays / (1000 *60*60*24);
console.log(Math.floor(ream));

