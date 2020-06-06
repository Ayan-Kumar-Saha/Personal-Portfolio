var modal_id = null;

var buttons = document.querySelectorAll('.expand-project');
var closebtns = document.querySelectorAll('.close');

buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        modal_id = event.target.id;

        document.querySelector(modal_id).style.display = 'flex';
    })
})

closebtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {

        document.querySelector(modal_id).style.display = 'none';
    })
})