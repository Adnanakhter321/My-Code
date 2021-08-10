var rightanswer = 0;
var totalquestion = 2;
var a = document.getElementsByTagName('p')[0];
var b = document.getElementsByTagName('p')[1];
var c = localStorage.getItem('userselect1');
var d = localStorage.getItem('answer');
var e = localStorage.getItem('userselect2');
var f = localStorage.getItem('answer2');


if(c == d){
    rightanswer += 1
}
if(e == f){
    rightanswer += 1
}
a.innerHTML = 'U Have Given ' + rightanswer + ' Right Answer' + ' Out of ' + totalquestion + ' Question';

b.innerHTML = 'U Have Got ' + (rightanswer / totalquestion) * 100 + '%' + " Percentage"


// if (true) {
//     if(b==c){
//     rightanswer += 1; 
//     }
//     if(f==e){
//         rightanswer += 1;
//     }
//     a.innerHTML = 'U Have Given ' + rightanswer + ' Right Answer' + ' Out of ' + totalquestion;
// }

// else if (b !== c) {
//     a.innerHTML = 'U Have Given ' + rightanswer + ' Right Answer' + ' Out of ' + totalquestion + ' Question';
// }
// if (b == c) {
//     d.innerHTML = 'U Have Got ' + (rightanswer / totalquestion) * 100 + '%'
// }
// else if (b !== c) { 
//     d.innerHTML = 'U Have Got ' + (rightanswer / totalquestion) * 100 + '%' + " Percentage"
// }
// function restart(){
//     localStorage.clear();
// }
