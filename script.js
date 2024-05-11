const buttons = document.querySelectorAll('.btn');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function(e) {
        if(e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'pink') {
            body.style.backgroundColor = e.target.id;
        }
    });
});