document.getElementsByTagName('div')[1].style.display = 'none';
document.getElementsByTagName('div')[2].style.display = 'none';
document.getElementsByTagName('button')[0].disabled = true;
document.getElementsByTagName('button')[0].style.border = '1px solid #999999';
document.getElementsByTagName('button')[0].style.color = '#666666';
document.getElementsByTagName('button')[0].style.backgroundColor = '#cccccc';
var num = 0;
function back(num1) {
    // console.log(num1);
    // console.log(num);
    num1 = num - num1;
    if (num1 === 1) {
        document.getElementsByTagName('div')[0].style.display = 'none';
        document.getElementsByTagName('div')[1].style.display = 'block';
        document.getElementsByTagName('div')[2].style.display = 'none';
    }
    else if (num1 === 0) {
        document.getElementsByTagName('div')[0].style.display = 'block';
        document.getElementsByTagName('div')[1].style.display = 'none';
        document.getElementsByTagName('div')[2].style.display = 'none';
    }
    num = num - 1;
    console.log(num)

    if (num === 0) {
        document.getElementsByTagName('button')[1].disabled = false;
        enablebuttonstyle(1);

        document.getElementsByTagName('button')[0].disabled = true;
        disablebuttonstyle(0);
    }
    if (num < 2) {
        document.getElementsByTagName('button')[1].disabled = false;
        enablebuttonstyle(1);
    }

}

function next(num2) {
    num2 = num + num2;
    if (num2 === 1) {
        document.getElementsByTagName('div')[0].style.display = 'none';
        document.getElementsByTagName('div')[1].style.display = 'block';
    }
    else if (num2 === 2) {
        document.getElementsByTagName('div')[0].style.display = 'none';
        document.getElementsByTagName('div')[1].style.display = 'none';
        document.getElementsByTagName('div')[2].style.display = 'block';
    }
    num = num + 1;
    console.log(num);

    if (num === 2) {
        document.getElementsByTagName('button')[1].disabled = true;
        disablebuttonstyle(1);

        document.getElementsByTagName('button')[0].disabled = false;
        enablebuttonstyle(0);
    }
    if (num > 0) {
        document.getElementsByTagName('button')[0].disabled = false;
        enablebuttonstyle(0);
    }
}
function disablebuttonstyle(num) {
    document.getElementsByTagName('button')[num].style.border = '1px solid #999999';
    document.getElementsByTagName('button')[num].style.color = '#666666';
    document.getElementsByTagName('button')[num].style.backgroundColor = '#cccccc';
}
function enablebuttonstyle(num) {
    document.getElementsByTagName('button')[num].style.color = '#0014ff';
    document.getElementsByTagName('button')[num].style.border = '1px solid #999999';
    document.getElementsByTagName('button')[num].style.backgroundColor = 'grey';
}