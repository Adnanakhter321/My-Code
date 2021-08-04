var inputForm = document.getElementById("item-list");
var ol = document.getElementById("list-item");
var addBtn = document.getElementById("addList");
var editElement;

inputForm.setAttribute('placeholder', 'Type And Add in List')
function addInList() {
  var list = document.createElement("li");
  var listText = document.createTextNode(inputForm.value);
  var delBtn = document.createElement("button");
  var delText = document.createTextNode("Delete");
  delBtn.appendChild(delText);
  delBtn.setAttribute("onclick", "deleteElement(this)");

  var editBtn = document.createElement("button");
  var editText = document.createTextNode("Edit");
  editBtn.appendChild(editText);
  editBtn.setAttribute("onclick", "editElementFunc(this)");

  list.appendChild(listText);
  list.appendChild(editBtn);
  list.appendChild(delBtn);

  ol.appendChild(list);
  inputForm.value = "";
}

function deleteElement(element) {
  inputForm.value = ""
  ol.removeChild(element.parentNode);
}
var a;
function editElementFunc(element) {
  editElement = element.parentNode
  addBtn.setAttribute('onclick','update()');
  addBtn.innerHTML = "Update";
  inputForm.value = element.previousSibling.nodeValue;
  a=element.previousSibling.nodeValue;
}
function update() {
    editElement.firstChild.nodeValue = inputForm.value
    inputForm.value = "";
    addBtn.innerHTML = "Add in List"
    addBtn.setAttribute('onclick' , 'addInList()');
}
