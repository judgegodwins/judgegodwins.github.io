var button = document.querySelector('.custom-button');
var boxFromDown = document.querySelector('.box-down');
var submit = document.querySelector('.submit');
var email = document.querySelector('#email'),
    name = document.querySelector('#name'),
    message = document.querySelector('#msg')


button.addEventListener('click', function(e) {
    boxFromDown.classList.toggle('up');
    this.classList.toggle('opened')
})

submit.addEventListener('click', function(e) {
    e.preventDefault();
    fetch('https://judgeportfolio.herokuapp.com/new_message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email.value,
            name: name.value,
            message: message.value
        })
    })
})