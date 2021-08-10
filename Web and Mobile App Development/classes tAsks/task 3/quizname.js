var nam = document.getElementsByTagName('input')[0];
function setname(){
    var a = nam.value;
    localStorage.setItem('name', a)
}