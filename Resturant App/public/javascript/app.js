let RestaurantName = document.getElementById('Restaurant-Name');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');
let country = document.getElementById('Country');
let city = document.getElementById('City');
let welcomename = document.getElementById('welcomename');

let storage = firebase.storage();

// ------------ Fetching currentUser USer ----------------
var uid45;
firebase.auth().onAuthStateChanged((user) => {
    uid45 = user.uid;
});
// -------------------------------------------------------

async function registerres() {
    let db = firebase.firestore();
    try {
        var userCredential = await firebase.auth().createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
    }
    catch (error) {
        alert(error);
    }
    console.log('USER CREATED');
    let Restaurantsadmin = {
        RestaurantName: RestaurantName.value,
        Email: emailEl.value,
        Password: passwordEl.value,
        country: country.value,
        city: city.value,
        uid: userCredential.user.uid
    }
    try {
        await db.collection('dataadmin').doc(userCredential.user.uid).set(Restaurantsadmin);
        console.log("Data Submitted");
        if (userCredential.user.uid) {
            window.location = './login.html';
        }
    }
    catch (error) {
        alert(error);
    }
}

// async function imageuploadtofirebase(uid) {
//     return new Promise(async (resolve, reject) => {
//         let image = userImageEl.files[0];
//         let storageRef = storage.ref();
//         let imageRef = storageRef.child(`userimages/${uid}/${image.name}`);
//         await imageRef.put(image)
//         console.log('IMAGE UPLOADED');
//         var url = await imageRef.getDownloadURL()
//         resolve(url)
//     })
// }

let user1;
firebase.auth().onAuthStateChanged((user) => {
    // console.log(user);
    // if(user == null && window.location == './home.html'){
    //     window.location = 'login.html'
    // }
    user1 = user.uid;

    firebase.firestore().collection("dataadmin").orderBy(user.uid).onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                console.log("New city: ", change.doc.data());
                let taskobj = change.doc.data()
                taskobj.id = change.doc.data()
                // getthelist(change.doc.data(), change.doc.id)
                console.log(change.doc.data());
            }
        })
    });
    // let pageLocArr = window.location.href.split('/');
    // let pageName = pageLocArr[pageLocArr.length - 1];
    // let authenticatedPages = ['home.html', 'findwork.html', 'myjob.html'];

    // if (user && authenticatedPages.indexOf(pageName) === -1) {
    //     window.location = './login.html';
    //     logout()

    // }
    // else if (!user && pageName === 'home.html') {
    //     window.location = './resturantadminregister.html';
    // }
});

async function loginuser() {
    try {
        let login = await firebase.auth().signInWithEmailAndPassword(emailEl.value, passwordEl.value);
        window.location = './home.html';
    } catch (error) {
        alert(error);
    }
}
function logout() {
    firebase.auth().signOut();
    window.location = './login.html';

}

let cont45 = document.getElementsByClassName('indata')
cont45[1].style.display = 'none'
cont45[2].style.display = 'none'
cont45[3].style.display = 'none'
function accepted(get) {
    // console.log(get);
    get.setAttribute("class", "nav-link active");
    // console.log(get.parentNode.parentNode.children[1].childNodes[1]);
    get.parentNode.parentNode.children[0].childNodes[1].setAttribute('class', 'nav-link')
    get.parentNode.parentNode.children[2].childNodes[1].setAttribute('class', 'nav-link')
    get.parentNode.parentNode.children[3].childNodes[1].setAttribute('class', 'nav-link')
    cont45[0].style.display = 'none'
    cont45[2].style.display = 'none'
    cont45[3].style.display = 'none'
    cont45[1].style.display = 'inherit'

}

function adddishes(get) {
    get.setAttribute("class", "nav-link active");
    get.parentNode.parentNode.children[0].childNodes[1].setAttribute('class', 'nav-link')
    get.parentNode.parentNode.children[1].childNodes[1].setAttribute('class', 'nav-link')
    get.parentNode.parentNode.children[2].childNodes[1].setAttribute('class', 'nav-link')
    cont45[0].style.display = 'none'
    cont45[1].style.display = 'none'
    cont45[2].style.display = 'none'
    cont45[3].style.display = 'inherit'
}

function pending(get) {
    get.setAttribute("class", "nav-link active");
    // console.log(get.parentNode.parentNode.children[1].childNodes[1]);
    get.parentNode.parentNode.children[1].childNodes[1].setAttribute('class', 'nav-link')
    get.parentNode.parentNode.children[2].childNodes[1].setAttribute('class', 'nav-link')
    get.parentNode.parentNode.children[3].childNodes[1].setAttribute('class', 'nav-link')
    cont45[0].style.display = 'inherit'
    cont45[1].style.display = 'none'
    cont45[2].style.display = 'none'
    cont45[3].style.display = 'none'
}

function Delivered(get) {
    get.setAttribute("class", "nav-link active");
    get.parentNode.parentNode.children[0].childNodes[1].setAttribute('class', 'nav-link')
    get.parentNode.parentNode.children[1].childNodes[1].setAttribute('class', 'nav-link')
    get.parentNode.parentNode.children[3].childNodes[1].setAttribute('class', 'nav-link')
    cont45[0].style.display = 'none'
    cont45[1].style.display = 'none'
    cont45[2].style.display = 'inherit'
    cont45[3].style.display = 'none'
}
let ItemName = document.getElementById('ItemName');
let Price = document.getElementById('Price');
let dishtype = document.getElementById('dishtype');
let deliveryt = document.getElementById('deliverytype');
let imgEl = document.getElementById('file');
let imgEl2 = document.getElementById('image');



async function createdish() {
    const user = firebase.auth().currentUser;
    console.log(user.uid);

    let url = await imageuploadtofirebase();
    let dish = {
        Itemname: ItemName.value,
        Price: Price.value,
        dishtype: checkdish(),
        deliverytype: deliverytype(),
        Imagelink: url,
        RestaurantName: localStorage.getItem("RestaurantName")
    }
    try {
        let db = firebase.firestore();
        db.collection('resturantdish').add(dish).then(() => { console.log('done'); alert('Dish Added To restaurant'); location.reload(); })
    }
    catch (error) {
        console.log(error);
    }
}
firebase.auth().onAuthStateChanged((user) => {
    uid46 = user.uid;
    // console.log(uid46);
    firebase.firestore().collection("dataadmin").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                // console.log("New city: ", change.doc.data());
                if (change.doc.data().uid == uid46) {
                    nameget = change.doc.data().RestaurantName;
                    console.log(nameget);
                    welcomename.innerHTML = "Welcome " + nameget;
                    localStorage.setItem('RestaurantName', nameget)
                }
            }
        })
    });
});
var nameget;
function getthename() {
    console.log(user1);
    var uid46;
    firebase.auth().onAuthStateChanged((user) => {
        uid46 = user.uid;
        console.log(uid46);
    });
    firebase.firestore().collection("dataadmin").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                // console.log("New city: ", change.doc.data());
                if (change.doc.data().uid == uid46) {
                    nameget = change.doc.data().RestaurantName;
                }
            }
        })
    });
}

function fetchall() {
    console.log(user1);
    var uid46;
    firebase.auth().onAuthStateChanged((user) => {
        uid46 = user.uid;
        console.log(uid46);
    });
    firebase.firestore().collection("dataadmin").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                // console.log("New city: ", change.doc.data());
                if (change.doc.data().uid == uid46) {
                    nameget = change.doc.data().RestaurantName;
                }
            }
        })
    });
}
window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }

            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
});

// let a = "https://source.unsplash.com/600x400/?restuarants,food"
// let b = window.location.href;
// console.log(a , b);
var aaa;
// imageuploadtofirebase()
async function imageuploadtofirebase() {
    return new Promise(async (resolve, reject) => {

        // console.log(image);

        window.addEventListener('load', function () {
            document.querySelector('input[type="file"]').addEventListener('change', function () {
                if (this.files && this.files[0]) {
                    var img = document.querySelector('img');
                    img.onload = () => {
                        URL.revokeObjectURL(imgEl.src);
                    }
                    imgEl.src = this.files[0].name;  // set src to blob url
                    console.log(img.src);
                    localStorage.setItem('imagelink', img.src)
                    console.log(localStorage.getItem('imagelink'));
                }
            });
        });
        // console.log(aaa);
        let image = "https://images.unsplash.com/photo-1559660539-a772b1f755f4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8YmlyeWFuaXx8fHx8fDE2Mjk4MDE0MDg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600";
        console.log(localStorage.getItem('imagelink'));
        let storageRef = storage.ref();
        let imageRef = storageRef.child(`userimages/${image.name}`);
        await imageRef.put(image)
        console.log('IMAGE UPLOADED');
        var url = await imageRef.getDownloadURL()
        resolve(url)
    })
}



function checkdish() {
    let checkrole;
    for (var a = 0; a < dishtype.length; a++) {
        if (dishtype[a].selected) {
            checkrole = dishtype[a].value;
        }
    }
    return checkrole;
}
function deliverytype() {
    let checkrole;
    for (var a = 0; a < deliveryt.length; a++) {
        if (deliveryt[a].selected) {
            checkrole = deliveryt[a].value;
        }
    }
    return checkrole;
}

function changeimage() {
    // console.log(imgEl.files[0].name);
    imgEl2.src = imgEl.files[0].name;
}


function fetchall() {
    fetchall2() 
    firebase.firestore().collection("ordersbyuser").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                let onlygetfood;
                firebase.firestore().collection("dataadmin").onSnapshot((snapshot) => {
                    snapshot.docChanges().forEach((change) => {
                        if (change.type === "added") {
                            if (uid45 == change.doc.data().uid) {
                                onlygetfood = change.doc.data().RestaurantName;
                            }
                        }
                    })
                    if (change.doc.data().RestaurantName == onlygetfood) {
                        // console.log(change.doc.data());
                        pendingdata(change.doc.data())
                    }
                });


            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.id);
                let det = document.getElementById(change.doc.id);
                setTimeout(function () { det.remove(); }, 2000)
                // deleteindom(change.doc.id)
            }
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
let pending2 = document.getElementById('pending');
function pendingdata(data) {

    var a = "200PKR";
    let b = a.split("PKR")

    let doc = document.createElement('div')
    doc.setAttribute("class", 'card')
    doc.setAttribute("id", data.uid2)
    doc.style.width = '18rem';
    // let img = document.createElement('img')
    // img.setAttribute('src', data.Imagelink)
    // // img.setAttribute('class', "card-img-top")
    // img.style.width = '286px'
    // img.style.height = '182px'
    // img.style.borderRadius = '7px'
    // doc.appendChild(img)

    let div = document.createElement('div')
    div.setAttribute("class", 'card-body')
    let h5 = document.createElement('h5')
    h5.setAttribute('class', "card-title")
    let h5text = document.createTextNode("You Have An Order")
    h5.appendChild(h5text)
    div.appendChild(h5)

    let span11 = document.createElement("span")
    let spantext = document.createTextNode("Dish: ")
    span11.style.fontWeight = '600'
    span11.appendChild(spantext)

    let p = document.createElement('p')
    p.setAttribute('class', "card-text")
    let ptext = document.createTextNode(data.DishName)
    p.appendChild(span11)
    p.appendChild(ptext)


    let span10 = document.createElement("span")
    let spantext0 = document.createTextNode("Buyer-Name:  ")
    span10.style.fontWeight = '600'
    span10.appendChild(spantext0)
    let p1 = document.createElement('p')
    p1.setAttribute('class', "card-text")
    let ptext1 = document.createTextNode(data.usernameAddress)
    p1.appendChild(span10)
    p1.appendChild(ptext1)


    let span12 = document.createElement("span")
    let spantext2 = document.createTextNode("Price: ")
    span12.style.fontWeight = '600'
    span12.appendChild(spantext2)
    // let span13 = document.createElement("span")
    // let spantext3 = document.createTextNode("PKR")
    // span13.appendChild(spantext3)

    let p2 = document.createElement('p')
    p2.setAttribute('class', "card-text")
    let p2text = document.createTextNode(data.Price)
    p2.appendChild(span12)
    p2.appendChild(p2text)
    // p2.appendChild(span13)




    let span14 = document.createElement("span")
    let spantext4 = document.createTextNode("Deliverytype:  ")
    span14.style.fontWeight = '600'
    span14.appendChild(spantext4)

    let p3 = document.createElement('p')
    p3.setAttribute('class', "card-text")
    let p3text = document.createTextNode(data.DeliveryType)
    p3.appendChild(span14)
    p3.appendChild(p3text)


    let span15 = document.createElement("span")
    let spantext5 = document.createTextNode("Quantity: ")
    span15.style.fontWeight = '600'
    span15.appendChild(spantext5)

    let p4 = document.createElement('p')
    p4.setAttribute('class', "card-text")
    let p4text = document.createTextNode(data.Quanity)
    p4.appendChild(span15)
    p4.appendChild(p4text)

    let span16 = document.createElement("span")
    let spantext6 = document.createTextNode("RestaurantName: ")
    span16.style.fontWeight = '600'
    span16.appendChild(spantext6)

    let p5 = document.createElement('p')
    p5.setAttribute('class', "card-text")
    let p5text = document.createTextNode(data.RestaurantName)
    p5.appendChild(span16)
    p5.appendChild(p5text)

    div.appendChild(p1)
    div.appendChild(p)
    div.appendChild(p2)
    div.appendChild(p3)
    div.appendChild(p4)
    div.appendChild(p5)

    let span = document.createElement('span')
    let atext = document.createTextNode("Accept Order")
    span.appendChild(atext)
    span.setAttribute('class', "btn btn-primary")
    span.setAttribute('onclick', "acceptorder(this)")

    let span34 = document.createElement('span')
    let atext23 = document.createTextNode("Reject Order")
    span34.appendChild(atext23)

    span34.setAttribute('class', "btn btn-primary")
    span34.setAttribute('onclick', "rejectorder(this)")
    div.appendChild(span)
    div.appendChild(span34)
    doc.appendChild(div)
    pending2.appendChild(doc)

}
function fetchall2() {
    fetchall3();
    firebase.firestore().collection("acceptedorders").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                if (change.doc.data().RestaurantName == nameget) {
                    // console.log(change.doc.data());
                    showinaccept(change.doc.data())
                }
                
            }
            if (change.type === "removed") {
                let det = document.getElementById(change.doc.id);
                setTimeout(function () { det.remove(); }, 2000)
            }
        })
    });
}


let accepted2 = document.getElementById('accepted')
function acceptorder(data) {
    // console.log(data.parentNode.parentNode.childNodes[0].childNodes[2].childNodes[1].nodeValue);;

    // let db  = firebase.firestore();
    let acceptorder = {
        Dish: data.parentNode.parentNode.childNodes[0].childNodes[2].childNodes[1].nodeValue,
        Price: data.parentNode.parentNode.childNodes[0].childNodes[3].childNodes[1].nodeValue,
        Deliverytype: data.parentNode.parentNode.childNodes[0].childNodes[4].childNodes[1].nodeValue,
        Quantity: data.parentNode.parentNode.childNodes[0].childNodes[5].childNodes[1].nodeValue,
        RestaurantName: data.parentNode.parentNode.childNodes[0].childNodes[6].childNodes[1].nodeValue
    }
    // console.log(acceptorder);
    try {
        let db = firebase.firestore();
        acceptorder.uid = uuidv4();
        acceptorder.usernameAddress = localStorage.getItem("userlogin");
        db.collection('acceptedorders').doc(acceptorder.uid).set(acceptorder);  
        db.collection("ordersbyuser").doc(data.parentNode.parentNode.id).delete().then(() => {
            alert('Order Accepted , Sended To Accepted Section')
        });
    }
    catch (error) {
        console.log(error);
    }

}
function rejectorder(data){
    let rejectorder = {
        Dish: data.parentNode.parentNode.childNodes[0].childNodes[2].childNodes[1].nodeValue,
        Price: data.parentNode.parentNode.childNodes[0].childNodes[3].childNodes[1].nodeValue,
        Deliverytype: data.parentNode.parentNode.childNodes[0].childNodes[4].childNodes[1].nodeValue,
        Quantity: data.parentNode.parentNode.childNodes[0].childNodes[5].childNodes[1].nodeValue,
        RestaurantName: data.parentNode.parentNode.childNodes[0].childNodes[6].childNodes[1].nodeValue
    }
    let db = firebase.firestore();
    rejectorder.uid = uuidv4();
    rejectorder.usernameAddress = localStorage.getItem("userlogin");
    db.collection('Rejectedorders').doc(rejectorder.uid).set(rejectorder);  
    db.collection("ordersbyuser").doc(data.parentNode.parentNode.id).delete().then(() => {
        alert('Order Rejected')
    });
}
function uuidv4() {
    return 'xxxxxx2xxxxxx4xxxyxxxxxxxxx2'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
function showinaccept(data) {
    // console.log(data);
    let doc = document.createElement('div')
    doc.setAttribute("class", 'card')
    doc.setAttribute("id", data.uid)
    doc.style.width = '18rem';
    let div = document.createElement('div')
    div.setAttribute("class", 'card-body')
    let h5 = document.createElement('h5')
    h5.setAttribute('class', "card-title")
    let h5text = document.createTextNode("Accepeted Order")
    h5.appendChild(h5text)
    div.appendChild(h5)

    let span11 = document.createElement("span")
    let spantext = document.createTextNode("Dish: ")
    span11.appendChild(spantext)

    let p = document.createElement('p')
    p.setAttribute('class', "card-text")
    let ptext = document.createTextNode(data.Dish)
    p.appendChild(span11)
    p.appendChild(ptext)


    let span12 = document.createElement("span")
    let spantext2 = document.createTextNode("Price: ")
    span12.appendChild(spantext2)
    // let span13 = document.createElement("span")
    // let spantext3 = document.createTextNode("PKR")
    // span13.appendChild(spantext3)

    let p2 = document.createElement('p')
    p2.setAttribute('class', "card-text")
    let p2text = document.createTextNode(data.Price)
    p2.appendChild(span12)
    p2.appendChild(p2text)
    // p2.appendChild(span13)

    let span10 = document.createElement("span")
    let spantext0 = document.createTextNode("Buyer-Name:  ")
    span10.appendChild(spantext0)
    let p1 = document.createElement('p')
    p1.setAttribute('class', "card-text")
    let ptext1 = document.createTextNode(data.usernameAddress)
    p1.appendChild(span10)
    p1.appendChild(ptext1)


    let span14 = document.createElement("span")
    let spantext4 = document.createTextNode("Deliverytype:  ")
    span14.appendChild(spantext4)

    let p3 = document.createElement('p')
    p3.setAttribute('class', "card-text")
    let p3text = document.createTextNode(data.Deliverytype)
    p3.appendChild(span14)
    p3.appendChild(p3text)


    let span15 = document.createElement("span")
    let spantext5 = document.createTextNode("Quantity: ")
    span15.appendChild(spantext5)

    let p4 = document.createElement('p')
    p4.setAttribute('class', "card-text")
    let p4text = document.createTextNode(data.Quantity)
    p4.appendChild(span15)
    p4.appendChild(p4text)

    let span16 = document.createElement("span")
    let spantext6 = document.createTextNode("RestaurantName: ")
    span16.appendChild(spantext6)

    let p5 = document.createElement('p')
    p5.setAttribute('class', "card-text")
    let p5text = document.createTextNode(data.RestaurantName)
    p5.appendChild(span16)
    p5.appendChild(p5text)

    div.appendChild(p1)
    div.appendChild(p)
    div.appendChild(p2)
    div.appendChild(p3)
    div.appendChild(p4)
    div.appendChild(p5)

    let span = document.createElement('span')
    let atext = document.createTextNode("Deliver ORder")
    span.appendChild(atext)
    span.setAttribute('class', "btn btn-primary")
    span.setAttribute('onclick', "deliverorder(this)")




    div.appendChild(span)
    doc.appendChild(div)
    accepted2.appendChild(doc)
}

function deliverorder(data){
    let deliverorder = {
        Dish: data.parentNode.parentNode.childNodes[0].childNodes[2].childNodes[1].nodeValue,
        Price: data.parentNode.parentNode.childNodes[0].childNodes[3].childNodes[1].nodeValue,
        Deliverytype: data.parentNode.parentNode.childNodes[0].childNodes[4].childNodes[1].nodeValue,
        Quantity: data.parentNode.parentNode.childNodes[0].childNodes[5].childNodes[1].nodeValue,
        RestaurantName: data.parentNode.parentNode.childNodes[0].childNodes[6].childNodes[1].nodeValue
    }
    let db = firebase.firestore();
    deliverorder.uid = uuidv4();
    deliverorder.usernameAddress = localStorage.getItem("userlogin");
    db.collection('Deliveredorders').doc(deliverorder.uid).set(deliverorder);  
    db.collection("acceptedorders").doc(data.parentNode.parentNode.id).delete().then(() => {
        alert('Order Delivered')
    });
}
function fetchall3() {
    firebase.firestore().collection("Deliveredorders").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                if (change.doc.data().RestaurantName == nameget) {
                    // console.log(change.doc.data());
                    showindomdeliverorders(change.doc.data())
                }
                
            }
            // if (change.type === "removed") {
            //     let det = document.getElementById(change.doc.id);
            //     setTimeout(function () { det.remove(); }, 2000)
            // }
        })
    });
}

function showindomdeliverorders(data){
    console.log(data);
    let delivered = document.getElementById('delivered')

    let doc = document.createElement('div')
    doc.setAttribute("class", 'card')
    doc.setAttribute("id", data.uid)
    doc.style.width = '18rem';
    let div = document.createElement('div')
    div.setAttribute("class", 'card-body')
    let h5 = document.createElement('h5')
    h5.setAttribute('class', "card-title")
    let h5text = document.createTextNode("Delivered ORderS")
    h5.appendChild(h5text)
    div.appendChild(h5)

    let span11 = document.createElement("span")
    let spantext = document.createTextNode("Dish: ")
    span11.appendChild(spantext)

    let p = document.createElement('p')
    p.setAttribute('class', "card-text")
    let ptext = document.createTextNode(data.Dish)
    p.appendChild(span11)
    p.appendChild(ptext)


    let span12 = document.createElement("span")
    let spantext2 = document.createTextNode("Price: ")
    span12.appendChild(spantext2)
    // let span13 = document.createElement("span")
    // let spantext3 = document.createTextNode("PKR")
    // span13.appendChild(spantext3)

    let p2 = document.createElement('p')
    p2.setAttribute('class', "card-text")
    let p2text = document.createTextNode(data.Price)
    p2.appendChild(span12)
    p2.appendChild(p2text)
    // p2.appendChild(span13)

    let span10 = document.createElement("span")
    let spantext0 = document.createTextNode("Buyer-Name:  ")
    span10.appendChild(spantext0)
    let p1 = document.createElement('p')
    p1.setAttribute('class', "card-text")
    let ptext1 = document.createTextNode(data.usernameAddress)
    p1.appendChild(span10)
    p1.appendChild(ptext1)


    let span14 = document.createElement("span")
    let spantext4 = document.createTextNode("Deliverytype:  ")
    span14.appendChild(spantext4)

    let p3 = document.createElement('p')
    p3.setAttribute('class', "card-text")
    let p3text = document.createTextNode(data.Deliverytype)
    p3.appendChild(span14)
    p3.appendChild(p3text)


    let span15 = document.createElement("span")
    let spantext5 = document.createTextNode("Quantity: ")
    span15.appendChild(spantext5)

    let p4 = document.createElement('p')
    p4.setAttribute('class', "card-text")
    let p4text = document.createTextNode(data.Quantity)
    p4.appendChild(span15)
    p4.appendChild(p4text)

    let span16 = document.createElement("span")
    let spantext6 = document.createTextNode("RestaurantName: ")
    span16.appendChild(spantext6)

    let p5 = document.createElement('p')
    p5.setAttribute('class', "card-text")
    let p5text = document.createTextNode(data.RestaurantName)
    p5.appendChild(span16)
    p5.appendChild(p5text)

    div.appendChild(p1)
    div.appendChild(p)
    div.appendChild(p2)
    div.appendChild(p3)
    div.appendChild(p4)
    div.appendChild(p5)

    // let span = document.createElement('span')
    // let atext = document.createTextNode("Deliver ORder")
    // span.appendChild(atext)
    // span.setAttribute('class', "btn btn-primary")
    // span.setAttribute('onclick', "deliverorder(this)")




    // div.appendChild(span)
    doc.appendChild(div)
    delivered.appendChild(doc)
}