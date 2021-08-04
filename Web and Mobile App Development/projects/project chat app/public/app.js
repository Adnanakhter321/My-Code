var text =  document.getElementById("text")


function getthetext(get){
    let span = document.createElement("span")
    let user = document.createElement('span')
    let usertextnode = document.createTextNode('Adnan: ')
    user.appendChild(usertextnode)
    user.style.color = '#d40000'
    user.style.textShadow = '#ffff00 1px 0px 2px'
    let br = document.createElement("br")
    span.appendChild(user)
    var textspan = document.createTextNode(text.value)
    span.appendChild(textspan)
    span.appendChild(br)
    // console.log(get.parentNode.previousSibling.parentNode.childNodes[3].childNodes[1]);
    let fun = get.parentNode.previousSibling.parentNode.childNodes[3].childNodes[1];
    fun.appendChild(span);
}
