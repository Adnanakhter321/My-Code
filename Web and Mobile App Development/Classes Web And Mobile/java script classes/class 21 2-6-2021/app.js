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

function addinlist() {

    //creating tag and assigning it in variable.
    var list = document.createElement('li');

    var listText = document.createTextNode(inputform.value);
    console.log(listText)





    // assigning tag in parent tag.
    ol.appendChild(list);
    var button = document.createElement('button')
    var buttonvalue = document.createTextNode("Delete")
    button.appendChild(buttonvalue);
    button.setAttribute('onclick', 'delete2(this)')


    //assigning innerhtml  in  tag we created before.
    list.appendChild(listText);

    list.appendChild(button);

    inputform.value = null;


}
function delete2(element) {
    // console.log(element)
    ol.removeChild(element.parentNode);
}
