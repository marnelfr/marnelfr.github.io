// Your web app's Firebase configuration
let config = { apiKey: "AIzaSyAkIVUSC7sG-ikSAvE0P6-TgyfQ8u4k7FY", authDomain: "test-b390c.firebaseapp.com", databaseURL: "https://test-b390c.firebaseio.com", projectId: "test-b390c", storageBucket: "test-b390c.appspot.com", messagingSenderId: "650968103355", appId: "1:650968103355:web:9dfe847610591501c2ac9e" };
// Initialize Firebase
firebase.initializeApp(config);
let domContentLoaded = true

// Initialize Firebase with a second Firebase project
//var otherProject = firebase.initializeApp(otherProjectFirebaseConfig, "other");
//var otherStorage = otherProject.storage();

let db = firebase.database();
/*let speach = db.ref('speach').set({
    current_page: 1
});*/
/*let pages2 = db.ref('speach/pages/2').set({
    title: "Acceuil",
    content: `<div style='display: table; height: 60%; width: 100%; text-align: center;'>
        <span style='display: table-cell; vertical-align: middle;'>
            <h1 style='color: #3c8dbc; font-size: 40px'>Page 2</h1>
        </span>
    </div>
    `
})

let pages3 = db.ref('speach/pages/3').set({
    title: "Acceuil",
    content: `<div style='display: table; height: 60%; width: 100%; text-align: center;'>
        <span style='display: table-cell; vertical-align: middle;'>
            <h1 style='color: #3c8dbc; font-size: 40px'>Page 3</h1>
        </span>
    </div>
    `
})*/
/*console.log(speach)*/


(function() {
    db.ref('speach/current_page').on('value', function (snapshot) {
        if (domContentLoaded) {
            return
        }
        alert(snapshot.val())
    })
})()



let next = document.querySelector('#next')
updatePage(next, 'next')

let previous = document.querySelector('#previous')
updatePage(previous, 'previous')

function updatePage(btn, action) {
    btn.addEventListener('click', function (e) {
        e.preventDefault()
        db.ref('speach/current_page').once('value').then(function (snapshot) {
            let current = snapshot.val()
            db.ref('speach').update({
                current_page: action === 'next' ? ++current : --current
            });
        })
    })
}
