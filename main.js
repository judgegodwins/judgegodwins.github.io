var button = document.querySelector('.custom-button');
var boxFromDown = document.querySelector('.box-down');
var submit = document.querySelector('.submit');
var email = document.querySelector('#email'),
    message = document.querySelector('#msg');
var name = document.getElementById('name')

button.addEventListener('click', function(e) {
    boxFromDown.classList.toggle('up');
    this.classList.toggle('opened')
})

submit.addEventListener('click', function(e) {
    e.preventDefault();

    fetch('https://judgeportfolio.herokuapp.com/new_message', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'content-type': 'application/json'
        },
        referrerPolicy: 'no-refferer',
        body: JSON.stringify({
            email: email.value,
            name: document.getElementById('name').value,
            message: message.value
        })
    });
})