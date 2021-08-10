function check(name) {
    var a = name.parentNode.childNodes[3].value.length;
    var b = name.parentNode.childNodes[3].value;
    console.log(a);
    console.log(b);
    console.log(b[a-1]);



















    if (document.getElementById('email').value === "") {
        alert("required field");
    }



    console.log(document.getElementById('email').value.length)

    if(document.getElementById('email').value !== ""){

    if (b[a-1] === 'm' && b[a - 2] === 'o' && b[a - 3] === 'c' && b[a - 4] === '.') {
        console.log('.com added')
    }
    else {
        alert('email must conatin ".com" ')
    }
   }
}