var button = document.querySelector('.custom-button');
var boxFromDown = document.querySelector('.box-down');


button.addEventListener('click', function(e) {
    boxFromDown.classList.toggle('up');
    this.classList.toggle('opened')
})