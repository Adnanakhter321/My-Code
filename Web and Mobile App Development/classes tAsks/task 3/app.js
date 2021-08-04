var a = document.getElementsByTagName('input')[0];
var b = document.getElementsByTagName('input')[2];
var c = document.getElementsByTagName('input')[4];
var d = document.getElementsByTagName('input')[6];
var e = document.getElementsByTagName('input')[8];


var f = document.getElementsByTagName('input')[9];
var g = document.getElementsByTagName('input')[11];
var h = document.getElementsByTagName('input')[13];
var i = document.getElementsByTagName('input')[15];
var j = document.getElementsByTagName('input')[17];

document.getElementsByTagName("button")[2].disabled = true

 document.getElementsByTagName('div')[3].style.display = 'none'

function takevalue() {
    var assign = new Option(f.value, g.value, h.value, i.value, j.value)
    localStorage.setItem('user2', JSON.stringify(assign))
}

// function takevalue() {
//     var assign = new Option(a.value, b.value, c.value, d.value, e.value)
//     localStorage.setItem('user', JSON.stringify(assign))
// }
function Option(question, op1, op2, op3, op4) {
    this.question = question,
        this.option1 = op1,
        this.option2 = op2,
        this.option3 = op3,
        this.option4 = op4
}



function rightans(value) {
    console.log(value)
    if (num == 0) {
        localStorage.setItem("answer", value)
    }
    if (num == 1) {
        localStorage.setItem("answer2", value)
    }
}

var num = 0;

function next(val) {
    val = num + val;


    if (val == 1) {
        //question 2
        document.getElementsByTagName('div')[3].style.display = 'block'
        document.getElementsByTagName('div')[2].style.display = 'none'


        var assign = new Option(a.value, b.value, c.value, d.value, e.value)
        localStorage.setItem('user1', JSON.stringify(assign))

        document.getElementsByTagName("button")[2].disabled = false


    }

    num = num + 1;
    console.log(num)

    if (num >= 1) {
        //enabling button next 
        document.getElementsByTagName('button')[1].disabled = true
        document.getElementsByTagName('button')[0].disabled = false
    }
}



 



document.getElementsByTagName('button')[0].disabled = true;


function back(val) {
    val = num - val;
    // console.log(val)
    if (val == 0) {
        //question 1
        document.getElementsByTagName('div')[3].style.display = 'none'
        document.getElementsByTagName('div')[2].style.display = 'block'
        document.getElementsByTagName("button")[2].disabled = true
    }




    console.log(num)

    num = num - 1;
    console.log(num)
    if (num <= 0) {
        //enabling button next 
        document.getElementsByTagName('button')[1].disabled = false
        document.getElementsByTagName('button')[0].disabled = true
        console.log(document.getElementsByTagName('button')[1])
    }

}










// function aaa() {
//     var a = document.getElementsByName('same');
//     var newvar = 0
//     var num;
//     for (num = 0; num < a.length; num++) {
//         if (a[num].checked == true) {
//             newvar += 1;
//         }
//     }

//     if (newvar >= 2) {
//         return false;
//     }
// }