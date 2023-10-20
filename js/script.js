
let title = document.querySelectorAll('.title');
let text = document.querySelectorAll('.text');


title.forEach( (items, i) => {
    
    items.addEventListener('click', (e) => {
    
        text[i].classList.toggle('active')
    })
} )