var ques1 = document.getElementsByTagName('p')[1];
var reset = document.getElementsByTagName('h2')[0]
var question1 = JSON.parse(localStorage.getItem("user1"))
reset.innerHTML = 'Welcome ' + localStorage.getItem('name')
ques1.innerHTML = 'Q) ' + question1.question + '?';
var a = document.getElementsByTagName('label')[0];
var b = document.getElementsByTagName('label')[1];
var c = document.getElementsByTagName('label')[2];
var d = document.getElementsByTagName('label')[3];
document.getElementsByTagName('button')[1].disabled = true
var getop1 = JSON.parse(localStorage.getItem('user1'))
a.innerHTML = getop1.option1;
b.innerHTML = getop1.option2;
c.innerHTML = getop1.option3;
d.innerHTML = getop1.option4;


function result(value2) {
   localStorage.setItem('userselect1', value2)
}
function result2(value2) {
   localStorage.setItem('userselect2', value2)
}



document.getElementsByTagName('div')[3].style.display = 'none'
var ques2 = document.getElementsByTagName('p')[3];
var reset2 = document.getElementsByTagName('h2')[1];
var getop2 = JSON.parse(localStorage.getItem('user2'))
reset2.innerHTML = 'Welcome ' + localStorage.getItem('name')
ques2.innerHTML = 'Q) ' + getop2.question + '?';


var e = document.getElementsByTagName('label')[4];
var f = document.getElementsByTagName('label')[5];
var g = document.getElementsByTagName('label')[6];
var h = document.getElementsByTagName('label')[7];
e.innerHTML = getop2.option1;
f.innerHTML = getop2.option2;
g.innerHTML = getop2.option3;
h.innerHTML = getop2.option4;

num = 1;
function next(vara) {
   vara = num + vara;
   console.log(vara)
   if (vara == 2) {
      document.getElementsByTagName('div')[3].style.display = 'block'
      document.getElementsByTagName('div')[2].style.display = 'none'
      document.getElementsByTagName('button')[0].disabled = 'true'
      document.getElementsByTagName('button')[1].disabled = false

   }
   num = num + 1
}