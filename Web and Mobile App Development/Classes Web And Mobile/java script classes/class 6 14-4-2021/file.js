var age = +prompt('Enter Your Age');
var gender = prompt('Enter Your Gender');
if(age >= 16){
    if(gender === 'male'){
        console.log('Welcome To Male Art Club');
                         }
        else if(gender === 'female'){
            console.log('Welcome To FeMale Art Club'); }
            else{
                console.log('Something went wrong');
                }     
}
 else {
 console.log('you r not eligible to participate in this art club');
}

// var firstname = ['Akram' ,' aslam' , 'abid'];
// var secondname = ['ansari' ,' shaikh' , 'khan'];
// for(var i = 0 ; i < firstname.length; i++ ){
//     for(var j = 0 ; j < secondname.length; j++ ){
//         console.log(firstname[i],secondname[j]);
//     }

// }

// var username = ('Karachi');
// var i = +prompt('enter index number');
// var username = prompt('Enter one character');
// console.log(username.toUpperCase);