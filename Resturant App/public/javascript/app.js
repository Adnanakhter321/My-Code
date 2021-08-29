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
    if (uid45) {
        cont45[1].style.display = 'none'
        cont45[2].style.display = 'none'
        cont45[3].style.display = 'none'
    }
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
                        pendingdata(change.doc.data())
                    }
                });


            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.id);
                let det = document.getElementById(change.doc.id);
                setTimeout(function () { det.remove(); }, 2000)
            }
        })
    });

}
let pending2 = document.getElementById('pending');

function pendingdata(data) {
    let div98 = document.createElement('div')
    div98.setAttribute('class', 'card-body')
    let el1 = `<h5 class="card-title">
    You Have An Order
    </h5>`

    let el2 = `<p class="card-text">
    <span style="font-weight: 600;">
    RestaurantName:
    </span>
    ${data.RestaurantName}
    </p>`
    div98.innerHTML = el1 + el2;

    let el54 = `<span class="btn btn-primary" onclick="acceptorder(this)">
    Accept Order
    </span>
    <span class="btn btn-primary" onclick="rejectorder(this)">
    Reject Order
    </span>`

    let elbyer = `<p class="card-text">
    <span style="font-weight: 600;">
    Buyer-Name:
    </span>
    ${data.BuyerName}
    </p>`

    let eltotalP = `<p class="card-text">
    <span style="font-weight: 600;">
    Total Price:
    </span>${data.TotalPrice}
    </p>`

    let d = 1
    for (var i = 0; i < Object.entries(data).sort().length; i++) {
        if (Object.entries(data).sort()[i][0] === `DishName${[d]}`) {
            // console.log(Object.entries(data).sort()[i][0] + ' : ' + Object.entries(data).sort()[i][1]);
            let el2 = `<p class="card-text">
            <span style="font-weight: 600;">
            ${Object.entries(data).sort()[i][0]}:
            </span>${Object.entries(data).sort()[i][1]}
            </p>`
            div98.innerHTML = div98.innerHTML + el2;
            d++;
        }
    }
    div98.innerHTML = div98.innerHTML + eltotalP + elbyer + el54;
    let div54 = document.createElement('div');
    div54.setAttribute('id', data.uid2)
    div54.setAttribute('class', 'card')
    div54.style.width = '18rem'
    div54.appendChild(div98)
    pending2.appendChild(div54)
}


function fetchall2() {
    fetchall3();
    firebase.firestore().collection("acceptedorders").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                if (change.doc.data().RestaurantName == nameget) {
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
    let acceptedorder = {
        RestaurantName: data.parentNode.parentNode.firstChild.children[1].innerText.split(':')[1].replace(' ', ""),
        TotalPrice: data.previousSibling.previousSibling.innerText.split(':')[1].replace(' ', ""),
        BuyerName_Address: data.previousSibling.innerText.split(':')[1].replace(' ', ""),
    }


    let d = 1
    for (i = 0; i < data.parentNode.parentNode.children[0].children.length; i++) {
        if (data.parentNode.parentNode.firstChild.children[i].innerText.split(':')[0] == `DishName${d}`) {
            acceptedorder[data.parentNode.parentNode.firstChild.children[i].innerText.split(':')[0]] = data.parentNode.parentNode.firstChild.children[i].innerText.split(':')[1].replace(" ", "")
            d++;
        }
    }
    try {
        let db = firebase.firestore();
        acceptedorder.uid = uuidv4();
        db.collection('acceptedorders').doc(acceptedorder.uid).set(acceptedorder);
        db.collection("ordersbyuser").doc(data.parentNode.parentNode.id).delete().then(() => {
            alert('Order Accepted , Sended To Accepted Section')
        });
    }
    catch (error) {
        console.log(error);
    }

}
function rejectorder(data) {
    console.log(data.previousSibling);
    console.log(data.previousSibling.previousSibling.previousSibling);
    let rejectorder = {
        RestaurantName: data.parentNode.parentNode.firstChild.children[1].innerText.split(':')[1].replace(' ', ""),
        TotalPrice: data.previousSibling.previousSibling.previousSibling.previousSibling.innerText.split(':')[1].replace(' ', ""),
        BuyerName_Address: data.previousSibling.previousSibling.previousSibling.innerText.split(':')[1].replace(' ', ""),
    }

    let d = 1
    for (i = 0; i < data.parentNode.parentNode.children[0].children.length; i++) {
        if (data.parentNode.parentNode.firstChild.children[i].innerText.split(':')[0] == `DishName${d}`) {
            rejectorder[data.parentNode.parentNode.firstChild.children[i].innerText.split(':')[0]] = data.parentNode.parentNode.firstChild.children[i].innerText.split(':')[1].replace(" ", "")
            d++;
        }
    }
    try {
        let db = firebase.firestore();
        rejectorder.uid = uuidv4();
        db.collection('Rejectedorders').doc(rejectorder.uid).set(rejectorder);
        db.collection("ordersbyuser").doc(data.parentNode.parentNode.id).delete().then(() => {
            alert('Order Rejected')
        });
    }
    catch (error) {
        console.log(error);
    }
}
function uuidv4() {
    return 'xxxxxx2xxxxxx4xxxyxxxxxxxxx2'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
function showinaccept(data) {
    let div98 = document.createElement('div')
    div98.setAttribute('class', 'card-body')
    let el1 = `<h5 class="card-title">
    Accepted Orders
    </h5>`

    let el2 = `<p class="card-text">
    <span style="font-weight: 600;">
    RestaurantName:
    </span>
    ${data.RestaurantName}
    </p>`
    div98.innerHTML = el1 + el2;

    let el54 = `<span class="btn btn-primary" onclick="deliverorder(this)">
    Deliver Order
    </span>`

    let elbyer = `<p class="card-text">
    <span style="font-weight: 600;">
    Buyer-Name:
    </span>
    ${data.BuyerName_Address}
    </p>`

    let eltotalP = `<p class="card-text">
    <span style="font-weight: 600;">
    Total Price:
    </span>${data.TotalPrice}
    </p>`

    let d = 1
    for (var i = 0; i < Object.entries(data).sort().length; i++) {
        if (Object.entries(data).sort()[i][0] === `DishName${[d]}`) {
            // console.log(Object.entries(data).sort()[i][0] + ' : ' + Object.entries(data).sort()[i][1]);
            let el2 = `<p class="card-text">
            <span style="font-weight: 600;">
            ${Object.entries(data).sort()[i][0]}:
            </span>${Object.entries(data).sort()[i][1]}
            </p>`
            div98.innerHTML = div98.innerHTML + el2;
            d++;
        }
    }
    div98.innerHTML = div98.innerHTML + eltotalP + elbyer + el54;
    let div54 = document.createElement('div');
    div54.setAttribute('id', data.uid)
    div54.setAttribute('class', 'card')
    div54.style.width = '18rem'
    div54.appendChild(div98)
    accepted2.appendChild(div54)
}

function deliverorder(data) {
    let deliverorder = {
        RestaurantName: data.parentNode.parentNode.firstChild.children[1].innerText.split(':')[1].replace(' ', ""),
        TotalPrice: data.previousSibling.previousSibling.innerText.split(':')[1].replace(' ', ""),
        BuyerName_Address: data.previousSibling.innerText.split(':')[1].replace(' ', ""),
    }

    let d = 1
    for (i = 0; i < data.parentNode.parentNode.children[0].children.length; i++) {
        if (data.parentNode.parentNode.firstChild.children[i].innerText.split(':')[0] == `DishName${d}`) {
            deliverorder[data.parentNode.parentNode.firstChild.children[i].innerText.split(':')[0]] = data.parentNode.parentNode.firstChild.children[i].innerText.split(':')[1].replace(" ", "")
            d++;
        }
    }
    try {
        let db = firebase.firestore();
        deliverorder.uid = uuidv4();
        db.collection('Deliveredorders').doc(deliverorder.uid).set(deliverorder);
        db.collection("acceptedorders").doc(data.parentNode.parentNode.id).delete().then(() => {
            alert('Order Delivered')
        });
    }
    catch (error) {
        console.log(error);
    }
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
            if (change.type === "removed") {
                let det = document.getElementById(change.doc.id);
                setTimeout(function () { det.remove(); }, 2000)
            }
        })
    });
}

function showindomdeliverorders(data) {
    let div98 = document.createElement('div')
    div98.setAttribute('class', 'card-body')
    let el1 = `<h5 class="card-title">
    Delivered Orders
    </h5>`

    let el2 = `<p class="card-text">
    <span style="font-weight: 600;">
    RestaurantName:
    </span>
    ${data.RestaurantName}
    </p>`
    div98.innerHTML = el1 + el2;

    let elbyer = `<p class="card-text">
    <span style="font-weight: 600;">
    Buyer-Name:
    </span>
    ${data.BuyerName_Address}
    </p>`

    let eltotalP = `<p class="card-text">
    <span style="font-weight: 600;">
    Total Price:
    </span>${data.TotalPrice}
    </p>`

    let d = 1
    for (var i = 0; i < Object.entries(data).sort().length; i++) {
        if (Object.entries(data).sort()[i][0] === `DishName${[d]}`) {
            // console.log(Object.entries(data).sort()[i][0] + ' : ' + Object.entries(data).sort()[i][1]);
            let el2 = `<p class="card-text">
            <span style="font-weight: 600;">
            ${Object.entries(data).sort()[i][0]}:
            </span>${Object.entries(data).sort()[i][1]}
            </p>`
            div98.innerHTML = div98.innerHTML + el2;
            d++;
        }
    }
    div98.innerHTML = div98.innerHTML + eltotalP + elbyer;
    let div54 = document.createElement('div');
    div54.setAttribute('id', data.uid)
    div54.setAttribute('class', 'card')
    div54.style.width = '18rem'
    div54.appendChild(div98)
    delivered.appendChild(div54)
}