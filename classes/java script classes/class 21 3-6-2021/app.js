// console.log(document.getElementsByTagName('div')[0])
// var div = document.getElementsByTagName('div')[0];
// console.log(div.childNodes[2].childNodes[1])
// var username = div.childNodes[2].childNodes[1];


// var div = document.getElementsByTagName('div')[1];
// var take = div.firstChild;
// console.log(take
// ) 


// var div = document.getElementsByTagName('div')[1];
// var take = div.lastChild;
// console.log(take
// )


// var div = document.getElementsByTagName('div')[1];
// var take = div.previousSibling;
// console.log(take
// )


// var div = document.getElementsByTagName('div')[1];
// var take = div.nextSibling;
// console.log(take
// )







var inputform = document.getElementById('item-list');
var ol = document.getElementById('list-item');
document.getElementsByTagName("button")[1].style.display = "none"

function addinlist() {

    //creating tag and assigning it in variable.
    var list = document.createElement('li');

    var listText = document.createTextNode(inputform.value);
    console.log(listText)
    if (listText === null || listText === "") {
        document.write("get");
    }
    else {
             // console.log(document.createTextNode(listText2));
             document.getElementsByTagName("button")[1].style.display = "block"

             //assigning value  in tag we created before.
             list.appendChild(listText);
     
             // assigning tag in parent tag.
             ol.appendChild(list);
     
             inputform.value = '';
    }


}
function delete2() {
    var tag = document.getElementsByTagName('li')[0];
    ol.removeChild(tag);
    if (document.getElementsByTagName('li')[0] === undefined) {
        document.getElementsByTagName("button")[1].style.display = "none"
    }
}
