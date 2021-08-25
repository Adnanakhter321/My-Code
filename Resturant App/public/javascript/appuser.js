
let yourcart;
yourcart = document.getElementById('yourcart');
let username2 = document.getElementById('user-name2');
let emailinuser2 = document.getElementById('email2');
let passwordinuser2 = document.getElementById('password2');
let Phoneinuser2 = document.getElementById('Phone');
let Cityinuser2 = document.getElementById('Cityinuser');
let countryinuser2 = document.getElementById('countryinuser');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password2');


let uid46;
firebase.auth().onAuthStateChanged((user) => {
    uid46 = user.uid;
    console.log(user.email);
    if (yourcart.innerHTML == 0) { sendorder.style.display = 'none' }
    firebase.firestore().collection("userdetails").onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        if(user.email == change.doc.data().Email){
                            localStorage.setItem('userlogin' ,change.doc.data().Username)
                        }
                    }
                   
                })
            });
});

async function registerinuser() {
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
        Username: username2.value,
        Email: emailinuser2.value,
        password: passwordinuser2.value,
        Phone: Phoneinuser2.value,
        city: Cityinuser2.value,
        Country: countryinuser2.value
    }
    console.log(user2);
    try {
        let db = firebase.firestore();
        db.collection('userdetails').doc(user.uid).set(user2).then(() => {
            console.log('done');
            window.location = './userinterfacelogin.html'
        })
    }
    catch (error) {
        console.log(error);
    }
}

async function loginuser() {
    try {
        let login = await firebase.auth().signInWithEmailAndPassword(emailEl.value, passwordEl.value);
            if (login) {
                window.location = './userinterface.html';
            }
    } catch (error) {
       alert(error)
    }
}

function logout() {
    firebase.auth().signOut();
    window.location = './userinterfacelogin.html';
}


// function fetchall() {
//     firebase.firestore().collection("ResName").onSnapshot((snapshot) => {
//         snapshot.docChanges().forEach((change) => {
//             if (change.type === "added") {
//                 console.log("New city: ",   change.doc.data());
//                 let taskobj = change.doc.data()
//                 taskobj.id = change.doc.data() 
//                 // getthelist(change.doc.data(), change.doc.id)
//                 showindom(change.doc.data())
//             }
//             if (change.type === "removed") {
//                 console.log("Removed city: ", change.doc.id);
//                 deleteindom(change.doc.id)
//             }
//             if (change.type === "modified") {
//                 console.log("Modified city: ", change.doc.data());
//                 let tasksObj = change.doc.data();
//                 console.log(change.doc.data());
//                 tasksObj.id = change.doc.id;
//                 updateindom(tasksObj);
//             }
//         })
//     });
// }
function fetchall() {
    firebase.firestore().collection("dataadmin").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                showindom(change.doc.data())
            }
            // if (change.type === "removed") {
            //     console.log("Removed city: ", change.doc.id);
            //     deleteindom(change.doc.id)
            // }
            // if (change.type === "modified") {
            //     console.log("Modified city: ", change.doc.data());
            //     let tasksObj = change.doc.data();
            //     console.log(change.doc.data());
            //     tasksObj.id = change.doc.id;
            //     updateindom(tasksObj);
            // }
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
function showindom(get) {
    let resdata = document.getElementById('resdata');

    let doc = document.createElement('div')
    doc.setAttribute("class", 'card')
    doc.style.width = '18rem';
    let img = document.createElement('img')
    img.setAttribute('src', "https://source.unsplash.com/500x300/?restuarants,food")
    img.setAttribute('class', "card-img-top")
    doc.appendChild(img)
    let div = document.createElement('div')
    div.setAttribute("class", 'card-body')
    let h5 = document.createElement('h5')
    h5.setAttribute('class', "card-title")
    let h5text = document.createTextNode(get.RestaurantName)
    h5.appendChild(h5text)
    div.appendChild(h5)
    let p = document.createElement('p')
    p.setAttribute('class', "card-text")
    let ptext = document.createTextNode("Delivery In 30 Minutes")
    p.appendChild(ptext)
    div.appendChild(p)
    let a = document.createElement('a')
    let atext = document.createTextNode("CheckDishes")
    a.appendChild(atext)
    a.setAttribute('href', "#!")
    a.setAttribute('class', "btn btn-primary")
    a.setAttribute('onclick', "showdishes(this)")
    div.appendChild(a)
    doc.appendChild(div)
    resdata.appendChild(doc)
}

let dishesshow = document.getElementById("dishesshow")
dishesshow.style.display = 'none'
let allres = document.getElementById("allres")
allres.style.display = 'none'

function showdishes(get) {
    let resdata = document.getElementById('resdata');
    resdata.style.display = 'none'
    console.log(get.parentNode.firstChild.innerHTML);



    firebase.firestore().collection("resturantdish").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {


                if (change.doc.data().RestaurantName == get.parentNode.firstChild.innerHTML) {
                    showdishes2(change.doc.data());
                }

                // console.log("New city: ",   change.doc.data());
                // console.log(change.doc.data());
                // let taskobj = change.doc.data()
                // taskobj.id = change.doc.data() 
                // getthelist(change.doc.data(), change.doc.id)
                // showindom(change.doc.data())
            }
        })
    });
}

function showdishes2(data) {
    dishesshow.style.display = 'inherit'
    allres.style.display = 'inherit'


    let doc = document.createElement('div')
    doc.setAttribute("class", 'card')
    doc.style.width = '18rem';
    let img = document.createElement('img')
    img.setAttribute('src', "https://source.unsplash.com/500x300/?restuarants,restuarants")
    // img.setAttribute('src', data.Imagelink)
    // img.setAttribute('class', "card-img-top")
    img.style.width = '286px'
    img.style.height = '182px'
    img.style.borderRadius = '7px'
    doc.appendChild(img)
    let div = document.createElement('div')
    div.setAttribute("class", 'card-body')
    let h5 = document.createElement('h5')
    h5.setAttribute('class', "card-title")
    let h5text = document.createTextNode(data.RestaurantName)
    h5.appendChild(h5text)
    div.appendChild(h5)

    let span11 = document.createElement("span")
    let spantext = document.createTextNode("Dish: ")
    span11.appendChild(spantext)

    let p = document.createElement('p')
    p.setAttribute('class', "card-text")
    let ptext = document.createTextNode(data.Itemname)
    p.appendChild(span11)
    p.appendChild(ptext)


    let span12 = document.createElement("span")
    let spantext2 = document.createTextNode("Price: ")
    span12.appendChild(spantext2)
    let span13 = document.createElement("span")
    let spantext3 = document.createTextNode("PKR")
    span13.appendChild(spantext3)

    let p2 = document.createElement('p')
    p2.setAttribute('class', "card-text")
    let p2text = document.createTextNode(data.Price)
    p2.appendChild(span12)
    p2.appendChild(p2text)
    p2.appendChild(span13)




    let span14 = document.createElement("span")
    let spantext4 = document.createTextNode("Deliverytype:  ")
    span14.appendChild(spantext4)

    let p3 = document.createElement('p')
    p3.setAttribute('class', "card-text")
    let p3text = document.createTextNode(data.deliverytype)
    p3.appendChild(span14)
    p3.appendChild(p3text)


    let span15 = document.createElement("span")
    let spantext5 = document.createTextNode("Dishtype: ")
    span15.appendChild(spantext5)

    let p4 = document.createElement('p')
    p4.setAttribute('class', "card-text")
    let p4text = document.createTextNode(data.dishtype)
    p4.appendChild(span15)
    p4.appendChild(p4text)

    div.appendChild(p)
    div.appendChild(p2)
    div.appendChild(p3)
    div.appendChild(p4)

    let span = document.createElement('span')
    let atext = document.createTextNode("Add To Cart")
    span.appendChild(atext)
    span.setAttribute('class', "btn btn-primary")
    span.setAttribute('onclick', "addtocart(this)")
    div.appendChild(span)
    doc.appendChild(div)
    dishesshow.appendChild(doc)
}

function showallres() {
    // dishesshow.style.display = 'none'
    // allres.style.display = 'none'
    // resdata.style.display = 'inherit'

    location.reload();
}





let order;

function addtocart(data) {
    // localStorage.clear();
    yourcart.innerHTML++;
    if (yourcart.innerHTML > 0) sendorder.style.display = 'inherit'
    order = {
        DishName: data.parentNode.childNodes[1].childNodes[1].nodeValue,
        RestaurantName: data.parentNode.firstChild.innerHTML,
        Quanity: yourcart.innerHTML,
        Price: data.parentNode.childNodes[2].childNodes[1].nodeValue + "PKR",
        DeliveryType: data.parentNode.childNodes[3].childNodes[1].nodeValue,
    }
    // console.log(order);

    if (yourcart.innerHTML == 0) { sendorder.style.display = 'none' }



    // localStorage.setItem("RestaurantName", data.parentNode.firstChild.innerHTML);
    // localStorage.setItem("Quanity", yourcart.innerHTML);
    // localStorage.setItem("Price", data.parentNode.childNodes[2].childNodes[1].nodeValue + "PKR");
    // localStorage.setItem('DeliveryType', data.parentNode.childNodes[3].childNodes[1].nodeValue);
}
function uuidv4() {
    return 'xxxxxx2xxxxxx4xxxyxxxxxxxxx2'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

//   console.log(uuidv4());
function sendorder2() {
    try {
        uid5463 = uuidv4();
        order.uid2 = uid5463;
        order.usernameAddress = localStorage.getItem('userlogin');
        let db = firebase.firestore();
        db.collection('ordersbyuser').doc(uid5463).set(order).then((user12, i) => {
            alert("Your Order HAs been Placed")
            yourcart.innerHTML = 0;
            if (yourcart.innerHTML == 0) { sendorder.style.display = 'none' }
            order = null;
        })
    }
    catch (error) {
        console.log(error);
    }
}














function allStorage() {

    var values = [],
        keys = Object.keys(localStorage)
    // console.log(keys);
    i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    return values;
}

let value = allStorage()
// console.log(value);


