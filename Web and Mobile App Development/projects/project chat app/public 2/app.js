function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
  console.log(formatAMPM(new Date));
var text =  document.getElementById("text")

function getthetext(get){
   if(text.value){
    let date2 = new Date().toString(new Date())
    let date3 = date2.slice(0, 16);
     console.log(date3);
     let span = document.createElement("span");
     span.setAttribute('class' , 'perele');
     
 
     let spanoftext = document.createElement('span')
     let textspan = document.createTextNode(text.value)
     
     spanoftext.appendChild(textspan)
     spanoftext.setAttribute('class' , 'spanoftext')
 
     let user = document.createElement('span')
     let usertextnode = document.createTextNode('Adnan  ');
     user.appendChild(usertextnode)
 
     let date = document.createElement('span')
     let datetext = document.createTextNode(date3 + formatAMPM(new Date))
     date.setAttribute('class' , 'datestyle')
     date.appendChild(datetext)
 
     let createdot = document.createElement("span")
     let dottext = document.createTextNode('.');
     createdot.setAttribute("class" , 'dotstyle')
     createdot.appendChild(dottext);
 
     user.style.color = 'rgb(44 48 255)'
     user.style.textShadow = 'rgb(228 222 222) 1px 1px 2px';
 
     let br = document.createElement("br")
     let br2 = document.createElement("br")
     span.appendChild(user)
     span.appendChild(createdot)
     span.appendChild(date);
     span.appendChild(br);
     span.appendChild(spanoftext)
     span.appendChild(br2)
     let fun = get.parentNode.previousSibling.parentNode.childNodes[3].childNodes[1];
     fun.appendChild(span);
     
    }
}