var mainscreen = document.getElementById("main-number");
var num1 = 0, num2 = 0, operator , result , dotval;


function passnumber(num) {
    if(operator){
        if(num2!= 0 && dotval ){
            num2 = num2.toString() + dotval+ num.toString();
        }
        else if ( num2!= 0 && dotval === undefined){
            num2 = num2.toString() + num.toString();
        }
        else {
           num2 = num;
        }
        
        printonscreen(num2);
    }
    else{
        if(num1!= 0 && dotval){
         
            num1 = num1.toString() + dotval + num.toString();
           
        }
        else if   ( num1!= 0 && dotval === undefined){
            num1 = num1.toString() + num.toString();
        }
        else {
            num1 = num;
        }

        printonscreen(num1);
    }
}

function operatorvalue(opvalue) {
    operator = opvalue
    // mainscreen.innerHTML = num1 + opvalue;
} 



function printonscreen(valueof) {
    mainscreen.innerHTML = valueof;
}


function clearallvalue() {
    num = undefined, num1 = 0, num2 = 0, operator = undefined  , dotval = undefined;;
   
    printonscreen(0);

}
function resultvalue() {
    if (operator === "+") {
        result = Number(num1) + Number(num2); 
    }
    else if (operator === '-') {
        result = Number(num1) - Number(num2);
    }
    else if (operator === '*') {
    //     if(dotval){
    //         result = parseFloat(num1) * parseFloat(num2)
    //     }
    //    else{
    //     result = Number(num1) * Number(num2);
    //    }
    //    result = result;
    result = parseFloat(num1) * parseFloat(num2)
    }
    else if (operator === '÷') {
        result = Number(num1) / Number(num2);
    }
    else {
        result = 'Something went wrong.';
    }
    printonscreen(result);
}
function dotvalue(han) {
    dotval = han;
}