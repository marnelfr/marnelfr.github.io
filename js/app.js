// Your web app's Firebase configuration
let config = { apiKey: "AIzaSyAkIVUSC7sG-ikSAvE0P6-TgyfQ8u4k7FY", authDomain: "test-b390c.firebaseapp.com", databaseURL: "https://test-b390c.firebaseio.com", projectId: "test-b390c", storageBucket: "test-b390c.appspot.com", messagingSenderId: "650968103355", appId: "1:650968103355:web:9dfe847610591501c2ac9e" };
// Initialize Firebase
firebase.initializeApp(config);
let domContentLoaded = true
let title = document.querySelector('#title'),
    interval, intervalTiece, online = false
    content = document.querySelector('#content')
const loader = '<span class="img _55ym _55yq _55yo" role="progressbar" aria-valuetext="Chargement..." aria-busy="true" aria-valuemin="0" aria-valuemax="100"></span>'

// Initialize Firebase with a second Firebase project
//var otherProject = firebase.initializeApp(otherProjectFirebaseConfig, "other");
//var otherStorage = otherProject.storage();


let db = firebase.database();
/*let speach = db.ref('speach').set({
    current_page: 1
});*/
/*let pages2 = db.ref('speach/pages/1').set({
    title: "Acceuil",
    content: `<div style='display: table; height: 60%; width: 100%; text-align: center;'>
        <span style='display: table-cell; vertical-align: middle;'>
            <h1 style='color: #3c8dbc; font-size: 40px'>Accueil</h1>
        </span>
    </div>
    `
})
let pages2 = db.ref('speach/pages/2').set({
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
    //Authentification
    const manager = $('#manager'),
        emailInp = $('#email'),
        pwdInp = $('#password'),
        connexion = $('#connexion')
    manager.on('click', function (e) {
        e.preventDefault()
        $('#modal').modal('show')
    })

    emailInp.on('keydown', function (e) {
        if(e.keyCode === 13) {
            login(e, connexion)
        }
    })

    pwdInp.on('keydown', function (e) {
        if(e.keyCode === 13) {
            login(e, connexion)
        }
    })

    connexion.on('click', function (e) {
        login(e, connexion)
    })
    function login(e, connexion) {
        e.preventDefault()
        let email = emailInp.val()
        let password = pwdInp.val()

        loading(connexion)

        firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
            reset(connexion)
            if (firebase.auth().currentUser) {
                const modal = $('.modal'),
                    btn_container = $('#btn_container'),
                    timer = $('#timer');

                modal.modal('hide')
                btn_container.html(`
                    <button class="btn btn-info btn-flat pull-left" id="previous">Previous</button>
                    <button class="btn btn-info btn-flat pull-right" id="next">Next</button>
                `)
                timer.html('<button id="start" class="btn btn-sm btn-info">Start</button>')
                timer.parent().append('<div style="padding: 0.5em" class="pull-left" id="div_logout"><button class="btn btn-sm btn-info" id="disconnect">Stop</button></div>')

                //Start timer
                $('#start').on('click', function (e) {
                    e.preventDefault()
                    loading($(this))
                    db.ref('speach').update({
                        current_page: 1,
                        online: true,
                        timer: {
                            started: true,
                            minute: 20
                        }
                    })
                })
                //!Start timer

                //Disconnect
                $('#disconnect').on('click', function (e) {
                    e.preventDefault()
                    let btn = $(this)
                    loading(btn)
                    let user = firebase.auth().currentUser;
                    if (user && user.email === 'nel@dev.io') {
                        db.ref('speach').update({
                            online: false,
                            timer: {
                                started: false,
                                minute: 20
                            }
                        }).then(function () {
                            firebase.auth().signOut()
                            $('#div_logout').hide('slow')
                        })
                    }
                })
                //!Disconnect

                //Manager btn
                updatePage('next')
                updatePage('previous')
                //!Manager btn
            }
        }).catch(function() {
            reset(connexion)
        });
    }
    //!Authentification

    //Loading page
    db.ref('speach/current_page').on('value', function (snapshot) {
        if(!online) {
            db.ref('speach/online').once('value', function (snap) {
                if(snap.val()) {
                    online = true
                    loadPage(snapshot)
                }
            })
        }else{
            loadPage(snapshot)
        }
    })
    function loadPage(snap) {
        let new_page = snap.val();
        db.ref('speach/pages/'+new_page).once('value').then(function (snapshot) {
            if(snapshot.exists()) {
                let page = snapshot.val()
                title.innerText = page.title
                content.innerHTML = page.content
            }
        })
    }
    //!Loading page

    //Start timer
    db.ref('speach/timer/started').on('value', function (snapshot) {
        let timer = $('#timer')
        if (snapshot.val()) {
            db.ref('speach/timer/minute').once('value', function (snapshot) {
                timer.html(snapshot.val() + ':00:00')
                startTimer(timer)
            })
        }else{
            clearInterval(interval)
            setTimeout(function () {
                timer.text('20:00:00')
            }, 1200)
        }
    })
    //!Start timer

    //On user leaving
    //window.onbeforeunload = function(){
    //    return 'Sure you when to leave ?'
    //};
    //!On user leaving
})()



//Functions..
function updatePage(btn_id) {
    let btn = document.querySelector('#'+btn_id)
    btn.addEventListener('click', function (e) {
        e.preventDefault()
        db.ref('speach/current_page').once('value').then(function (snapshot) {
            let current = snapshot.val()
            btn_id === 'next' ? current++ : current--;
            db.ref('speach/pages/'+current).once('value').then(function (page) {
                if (page.exists()) {
                    db.ref('speach').update({
                        current_page: current
                    });
                }
            })
        })
    })
}


function loading(node) {
    node.hide()
    node.parent().append(loader)
}

function reset(node) {
    $('._55ym').remove()
    node.show()
}

function startTimer(timer) {
    interval = setInterval(function () {
        counter(timer)
    }, 1000)
}

function counter(timer) {
    let hour = timer.text().split(':'),
        min = hour[0],
        sec = hour[1],
        tiece = 99
    if (sec == 0 && min > 0) {
        min--
        sec = 59
        let user = firebase.auth().currentUser;
        if (user && user.email === 'nel@dev.io') {
            db.ref('speach/timer').update({
                minute: min
            })
        }
    } else {
        sec--
    }
    if (min == 9) {
        timer.css('color', '#fdc31a')
    }
    if (min == 4) {
        timer.css('color', 'red')
    }

    min = withZero(min)
    sec = withZero(sec)

    timer.text(min+':'+sec+':'+tiece)

    if (min === '00' && (sec === '00' || sec === '0-1')) {
        clearInterval(interval)
        clearInterval(intervalTiece)
        timer.text('00:00:00')
        return
    }

    intervalTiece = setInterval(function () {
        tiece--
        tiece = withZero(tiece.toString())
        timer.text(min+':'+sec+':'+tiece)
        if (tiece < 5) {
            clearInterval(intervalTiece)
        }
    }, 10)
}

function withZero(min){
    if (min < 10) {
        min = '0' + parseInt(min)
    }

    return min
}