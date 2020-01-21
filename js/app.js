// Your web app's Firebase configuration
let config = { apiKey: "AIzaSyAkIVUSC7sG-ikSAvE0P6-TgyfQ8u4k7FY", authDomain: "test-b390c.firebaseapp.com", databaseURL: "https://test-b390c.firebaseio.com", projectId: "test-b390c", storageBucket: "test-b390c.appspot.com", messagingSenderId: "650968103355", appId: "1:650968103355:web:9dfe847610591501c2ac9e" };
// Initialize Firebase
firebase.initializeApp(config);
let domContentLoaded = true
let title = document.querySelector('#title'),
    interval,
    content = document.querySelector('#content')
const loader = '<span class="img _55ym _55yq _55yo" role="progressbar" aria-valuetext="Chargement..." aria-busy="true" aria-valuemin="0" aria-valuemax="100"></span>'

// Initialize Firebase with a second Firebase project
//var otherProject = firebase.initializeApp(otherProjectFirebaseConfig, "other");
//var otherStorage = otherProject.storage();


let db = firebase.database();
/*let speach = db.ref('speach').set({
    current_page: 1
});*/
/*
let pages2 = db.ref('speach/pages/1').set({
    title: "STOCK EXCHANGE",
    content: `<div style="display: table; height: 60%; width: 100%; text-align: center;">
            <span style="display: table-cell; vertical-align: middle;">
                <h1 style="color: #3c8dbc; font-size: 40px">STOCK EXCHANGE</h1>
            </span>
        </div>
        <div style="margin-top:2em;" class="col-md-12 col-sm-12 col-xs-12">
            <p style="color: #222222; font-style: italic">Presented by</p>
            <p id="marnel">Marnel Gnacadja</p>
        </div>
    `
})
pages2 = db.ref('speach/pages/2').set({
    title: "STOCK EXCHANGE",
    content: `<div style="display: table; height: 60%; width: 100%; text-align: center;">
            <span style="display: table-cell; vertical-align: middle;">
                <h1 style="color: #3c8dbc; font-size: 40px">Outline</h1>
            </span>
        </div>
        <div style="margin-top:2em;" class="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 text-left">
            <h3 style="font-weight: bold">Introduction</h3>
            <h3>Chapter I: What is this?</h3>
            <h3>Chapter II: Role of Stock Exchange</h3>
            <h3>Chapter III: Risks for stock investors</h3>
            <h3>Chapter IV: Major Stock Exchange</h3>
            <h3>Recommendation</h3>
            <h3 style="font-weight: bold">Conclusion</h3>
        </div>
    `
})
pages2 = db.ref('speach/pages/3').set({
    title: "STOCK EXCHANGE",
    content: `<div style="display: table; height: 60%; width: 100%; text-align: center;">
            <span style="display: table-cell; vertical-align: middle;">
                <h1 style="color: #3c8dbc; font-size: 40px">Introduction</h1>
            </span>
        </div>
        <div style="margin-top:2em;" class="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 text-center">
            <p>
                Knowing how to secure your financial well-being is very important. That’s why we are going to travel through the stock exchange.
                <br>
                <span style="font-weight: bold">What is a stock exchange? What is the purpose of a stock exchange?</span>
                <br>Those are great questions.

            </p>
        </div>
    `
})
pages2 = db.ref('speach/pages/4').set({
    title: "STOCK EXCHANGE",
    content: `<div style="display: table; height: 60%; width: 100%; text-align: center;">
            <span style="display: table-cell; vertical-align: middle;">
                <h1 style="color: #3c8dbc; font-size: 40px">Chapter I <br><small>What is this?</small></h1>
            </span>
        </div>
        <div style="margin-top:2em;" class="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 text-center">
            <p>
                A <span style="font-weight: bold">stock exchange</span> is an organized and regulated financial market where securities (bonds, stocks, shares) are bought and sold at prices governed by the forces of demand and supply
            </p>
        </div>
    `
})

pages2 = db.ref('speach/pages/5').set({
    title: "STOCK EXCHANGE",
    content: `<div style="display: table; height: 60%; width: 100%; text-align: center;">
            <span style="display: table-cell; vertical-align: middle;">
                <h1 style="color: #3c8dbc; font-size: 40px">Chapter II <br><small>Role of Stock Exchange</small></h1>
            </span>
        </div>
        <div style="margin-top:2em;" class="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 text-center">
            <p>
                Stock exchanges play a vital role in the functioning of the economy by providing the backbone to a modern nation's economic infrastructure. Stock exchanges help companies raise money to expand. They also provide individuals the ability to invest in companies...
            </p>
        </div>
    `
})


pages2 = db.ref('speach/pages/6').set({
    title: "STOCK EXCHANGE",
    content: `<div style="display: table; height: 60%; width: 100%; text-align: center;">
            <span style="display: table-cell; vertical-align: middle;">
                <h1 style="color: #3c8dbc; font-size: 40px">Chapter III <br><small>Risks for stock investors</small></h1>
            </span>
        </div>
        <div style="margin-top:2em;" class="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 text-center">
            <p>
                Investing in stocks is a risky business. There are some risks you have some control over and others that you can only guard against.
                <br><br>
                Thoughtful investment selections that meet your goals and risk profile keep individual stock and bond risks at an acceptable level.
            </p>
        </div>
    `
})


pages2 = db.ref('speach/pages/7').set({
    title: "STOCK EXCHANGE",
    content: `<div style="display: table; height: 60%; width: 100%; text-align: center;">
            <span style="display: table-cell; vertical-align: middle;">
                <h1 style="color: #3c8dbc; font-size: 40px">Chapter IV <br><small>Major Stock Exchanges</small></h1>
            </span>
        </div>
        <div style="margin-top:2em;" class="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 text-center">
            <ol>
                <li>The New York Stock Exchange</li>
                <li>Shanghai Stock Exchange</li>
                <li>Tokyo Stock Exchange</li>
                <li>Euronext</li>
                <li>BRVM</li>
                <li>etc.</li>
            </ol>
        </div>
    `
})
pages2 = db.ref('speach/pages/8').set({
    title: "STOCK EXCHANGE",
    content: `<div style="display: table; height: 60%; width: 100%; text-align: center;">
            <span style="display: table-cell; vertical-align: middle;">
                <h1 style="color: #3c8dbc; font-size: 40px">Recommendation</h1>
            </span>
            
        </div>
        <div style="margin-top:2em;" class="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 text-center">
            <p>
                Stocks and bonds represent two different ways for an entity to save and raise money. Since stock may make you take risk, you may think there is no better way than invest in bonds.
            </p>
        </div>
    `
})
pages2 = db.ref('speach/pages/9').set({
    title: "STOCK EXCHANGE",
    content: `<div style="display: table; height: 60%; width: 100%; text-align: center;">
            <span style="display: table-cell; vertical-align: middle;">
                <h1 style="color: #3c8dbc; font-size: 40px">Conclusion</h1>
            </span>
        </div>
        <div style="margin-top:2em;" class="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 text-center">
            <p>
                Stock market has its risk but can help you to achieve your financial goal. Many people invest in both stocks and bonds to diversify.
                <br>
                So do whatever you want but at least, invest in something, make your retirement more comfortable.
            </p>
        </div>
    `
})

pages2 = db.ref('speach/pages/10').set({
    title: "STOCK EXCHANGE",
    content: `<div style="display: table; height: 60%; width: 100%; text-align: center;">
            <span style="display: table-cell; vertical-align: middle;">
                <h1 id="marnel" style="color: #3c8dbc; font-size: 40px">Thanks for your attention</h1>
            </span>
        </div>
    `
})
*/
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
    $('#keywords').on('click', function (e) {
        e.preventDefault()
        $('#key_content').toggle('slow')
    })


    //Authentification
    let manager = $('#manager')
    manager.on('click', function (e) {
        e.preventDefault()
        $('#modal').modal('show')
    })

    const btn_div = $('#btn_container')
    const connexion = $('#connexion')
    connexion.on('click', function (e) {
        e.preventDefault()
        let email = $('#email').val()
        let password = $('#password').val()

        loading(connexion)

        firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
            reset(connexion)
            if (firebase.auth().currentUser) {
                let modal = $('.modal'),
                    btn_container = $('#btn_container'),
                    timer = $('#timer');

                modal.modal('hide')
                btn_container.html(`
                    <button class="btn btn-info btn-flat pull-left" id="previous">Previous</button>
                    <button class="btn btn-info btn-flat pull-right" id="next">Next</button>
                `)
                timer.html('<button id="start" class="btn btn-sm btn-info">Start</button>')

                $('#start').on('click', function (e) {
                    e.preventDefault()
                    loading($(this))
                    db.ref('speach').update({
                        current_page: 1,
                        timer: {
                            started: true,
                            minute: 20
                        }
                    })
                })
                //Manager btn
                updatePage('next')
                updatePage('previous')
                //!Manager btn
            }
        }).catch(function() {
            reset(connexion)
        });



    })
    //!Authentification

    //Loading page
    db.ref('speach/current_page').on('value', function (snapshot) {
        let new_page = snapshot.val();
        db.ref('speach/pages/'+new_page).once('value').then(function (snapshot) {
            if(snapshot.exists()) {
                let page = snapshot.val()
                title.innerText = page.title
                content.innerHTML = page.content
            }
        })
    })
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
            console.log('oko')
            clearInterval(interval)
            setTimeout(function () {
                timer.text('20:00:00')
            }, 1200)
        }
    })
    //!Start timer

    //On user leaving
    window.onbeforeunload = function(){
        let user = firebase.auth().currentUser;
        if (user && user.email === 'nel@dev.io') {
            db.ref('speach/timer').update({
                started: false,
                minute: 20
            })
        }
    };
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

    if (min === '00' && sec === '00') {
        clearInterval(interval)
        setTimeout(function () {
            timer.text('00:00:00')
        }, 1000)
        return
    }

    let i = setInterval(function () {
        tiece--
        tiece = withZero(tiece)
        timer.text(min+':'+sec+':'+tiece)
        if (tiece < 5) {
            clearInterval(i)
        }
    }, 10)
}

function withZero(min){
    if(typeof min !== 'number') {
        min = parseInt(min)
    }
    if (min < 10) {
        min = '0'+min
    }
    return min
}