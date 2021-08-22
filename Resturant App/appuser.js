
let username2 = document.getElementById('user-name2');
let emailinuser2 = document.getElementById('email2');
let passwordinuser2 = document.getElementById('password2');
let Phoneinuser2 = document.getElementById('Phone');
let Cityinuser2  = document.getElementById('Cityinuser');
let countryinuser2  = document.getElementById('countryinuser');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password2');

async function registerinuser(){
    let db = firebase.firestore();
    try {
        var userCredential = await firebase.auth().createUserWithEmailAndPassword(emailinuser2.value, passwordinuser2.value)
    }
    catch (error) {
        console.log(error);
    }
    let user = userCredential.user;

    console.log('USER CREATED');
   
    let user2 = {
                    Username : username2.value,
                    Email : emailinuser2.value,
                    password: passwordinuser2.value,
                    Phone : Phoneinuser2.value,
                    city: Cityinuser2.value,
                    Country : countryinuser2.value
                }
                console.log(user2);
                try {
                    let db = firebase.firestore();
                    db.collection('userdetails').doc(user.uid).set(user2).then(() => { console.log('done'); 
                    window.location = './userinterfacelogin.html'})
                }
                catch (error) {
                    console.log(error);
                }
}

async function loginuser() {
    try {
        let login = await firebase.auth().signInWithEmailAndPassword(emailEl.value, passwordEl.value);
       if(login){
        window.location = './userinterface.html';
       }
    } catch (error) {
        console.log(error);
    }
}

function logout() {
    firebase.auth().signOut();
    window.location = './userinterfacelogin.html';
}


function fetchall() {
    firebase.firestore().collection("ResName").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                console.log("New city: ",   change.doc.data());
                let taskobj = change.doc.data()
                taskobj.id = change.doc.data() 
                // getthelist(change.doc.data(), change.doc.id)
                showindom(change.doc.data())
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.id);
                deleteindom(change.doc.id)
            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());
                let tasksObj = change.doc.data();
                console.log(change.doc.data());
                tasksObj.id = change.doc.id;
                updateindom(tasksObj);
            }
        })
    });
}
{/* <div class="card" style="width: 18rem;">
        <img src="https://source.unsplash.com/500x300/?restuarants,food" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Restaurant Name</h5>
          <p class="card-text">Best Restuarants</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> */}
function showindom(get){
    console.log(get.RestaurantName);
    let resdata = document.getElementById('resdata');
    console.log(resdata);
    // let doc = document.createElement('div')
    // doc.setAttribute("class" , 'card')
    // doc.style.width = '18rem';
    // let img = document.createElement('img')
    // let textdoc = document.createTextNode(img)
    // img.setAttribute('src' , "https://source.unsplash.com/500x300/?restuarants,food")
    // // img.setAttribute('class ' , "card-img-top")
    // doc.appendChild(textdoc)
    // let div = document.createElement('div')
    // let h5 = document.createElement('h5')
    // h5.setAttribute('class ' , "card-title")
    // let p = document.createElement('p')
    // img.setAttribute('class ' , "card-text")
    // let a = document.createElement('a')
    // a.setAttribute('href ' , "#")
    // a.setAttribute('class ' , "btn btn-primary")
    // div.setAttribute('class ' , "card-body")
    // let divdoc1 = document.createTextNode(h5)
    // let divdoc2 = document.createTextNode(p)
    // let divdoc3 = document.createTextNode(a)
    // div.appendChild(divdoc1)
    // div.appendChild(divdoc2)
    // div.appendChild(divdoc3)
    // let divdoc1text = document.createTextNode(h5)
    // let divdoc2text = document.createTextNode(p)
    // let divdoc3text = document.createTextNode(a)
    // h5.appendChild(divdoc1text)
    // p.appendChild(divdoc2text)
    // a.appendChild(divdoc3text)



}
// showindom();