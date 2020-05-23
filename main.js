var button = document.querySelector('.custom-button');
var boxFromDown = document.querySelector('.box-down');
var submit = document.querySelector('.submit');
var email = document.querySelector('#email'),
    message = document.querySelector('#msg');
var result = document.getElementById('result')
var signaler = document.querySelector('.signaler');
var resIcon = signaler.children[0];
var reply = document.querySelector('.reply');
var closer = document.querySelector('.btn-close');
var container = document.querySelector('.container')

button.addEventListener('click', function(e) {
    boxFromDown.classList.toggle('up');
    this.classList.toggle('opened')
})

closer.addEventListener('click', function() {
    setTimeout(
        () => result.classList.add('close'),
        200
    );
})

submit.addEventListener('click', function(e) {
    let name = document.getElementById('name').value;
    if(name == '' || email.value == '' || message.value =='') {
        return;
    } else {
        e.preventDefault();
        fetch('https://judgeportfolio.herokuapp.com/new_message', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value,
                name: document.getElementById('name').value,
                message: message.value
            })
        }).then(data => {
            console.log(data)
            result.classList.remove('close');
            if(data.result === 'success') {
                console.log(data);
                
                
                signaler.classList.remove('bad');
                signaler.classList.add('ok');
                resIcon.classList.remove('fa-times');
                resIcon.classList.add('fa-check');
                reply.innerHTML = `Hi ${name}, your message has been delivered, I'll get back to you soon`;
            } else {
                notOkUi();
            }
            email.value = '';
            message.value = '';
            document.getElementById('name').value = '';
        }).catch(err => {
            result.classList.remove('close');
            notOkUi();
        });
    }
});

function notOkUi() {
    signaler.classList.remove('ok')
    signaler.classList.add('bad')
    resIcon.classList.remove('fa-check');
    resIcon.classList.add('fa-times');
    reply.innerHTML = "Oops! Something went wrong.";
}

if(window.location == window.parent.location) {
    console.log('in iframe');
    var startingY;
    container.ontouchstart = function(e) {
        startingY = e.touches[0].clientY;
        console.log(startingY);
    };
    container.ontouchmove = function(e) {
        
    }
}