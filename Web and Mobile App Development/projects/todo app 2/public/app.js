var inputform = document.getElementById('item-list');
var ol = document.getElementById('list-item');

function addinlist() {

    //creating tag and assigning it in variable.
    var list = document.createElement('li');

    var listText = document.createTextNode(inputform.value);


    // assigning tag in parent tag.
    ol.appendChild(list);

    var button = document.createElement('button')
    var buttonvalue = document.createTextNode("Delete")
    var space = document.createTextNode("   ")
    var editBtn = document.createElement('button')
    var editvalue = document.createTextNode("Edit")
    button.setAttribute('class', 'btn btn-primary btn-sm')
    editBtn.setAttribute('class', 'btn btn-primary btn-sm')
    button.appendChild(buttonvalue);
    editBtn.appendChild(editvalue);

    button.setAttribute('onclick', 'delete2(this)');
    editBtn.setAttribute('onclick', 'edit(this)');

    list.appendChild(listText);
    list.appendChild(button);
    list.appendChild(editBtn);

    inputform.value = "";


}
function delete2(element) {
    console.log(element.parentNode)
    console.log(element)
    ol.removeChild(element.parentNode);
}


var def;

function edit(element) {
    console.log(element.parentNode.childNodes[0].nodeValue.length)
    var input = document.createElement('input');
    var save = document.createElement('button');
    var savevalue = document.createTextNode('save')
    save.setAttribute("onclick", "save(this)")
    save.setAttribute('class', 'btn btn-primary btn-sm')
    save.appendChild(savevalue)
    input.setAttribute('type', 'text');
    input.setAttribute('size', element.parentNode.childNodes[0].nodeValue.length);
    input.setAttribute('class', 'inputforedit')
    input.value = element.parentNode.childNodes[0].nodeValue;
    element.parentNode.appendChild(input)
    element.parentNode.appendChild(save)
    def = element.parentNode;

    def.childNodes[0].nodeValue = "";
    def.childNodes[1].style.display = 'none'
    def.childNodes[2].style.display = 'none'

}
var valueofit;
function save(element) {
    element.parentNode.childNodes[0].nodeValue = element.previousSibling.value
    console.log(element.parentNode)
    element.parentNode.childNodes[1].style.display = 'inline'
    element.parentNode.childNodes[2].style.display = 'inline'
    element.parentNode.removeChild(element.previousSibling)
    element.parentNode.removeChild(element)
}