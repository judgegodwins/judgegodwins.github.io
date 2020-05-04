var button = document.querySelector('.custom-button');
var boxFromDown = document.querySelector('.box-down');
var submit = document.querySelector('.submit');
var email = document.querySelector('#email'),
    message = document.querySelector('#msg');
var result = document.getElementById('result')
var signaler = document.querySelector('.signaler');
var resIcon = signaler.children[0];
var reply = document.querySelector('.reply');

button.addEventListener('click', function(e) {
    boxFromDown.classList.toggle('up');
    this.classList.toggle('opened')
})

result.addEventListener('click', function() {
    this.classList.add('close');
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
            if(data !== 'success') {
                signaler.classList.remove('bad');
                signaler.classList.add('ok');
                resIcon.classList.remove('fa-times');
                resIcon.classList.add('fa-check');
                reply.innerHTML = `Hi ${name}, your message has been delivered, I'll get back to you later`;
            } else {
                signaler.classList.remove('ok')
                signaler.classList.add('bad')
                resIcon.classList.remove('fa-check');
                resIcon.classList.add('fa-times');
                reply.innerHTML = "Oops! Something went wrong.";
            }
            email.value = '';
            message.value = '';
            document.getElementById('name').value = '';
        });
    }
    

})

