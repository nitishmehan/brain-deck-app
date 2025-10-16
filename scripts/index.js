let cards = document.querySelectorAll('.card');
let index = 0;
let size = cards.length;

function next() {
    let prev = index;
    index = (index+1)%size;
    cards.forEach((card,i)=>{
        if(i==prev) {card.classList.add('card-hidden'); card.classList.remove('card-active');}
        if(i==index) {card.classList.remove('card-hidden'); card.classList.add('card-active')}
    })
}

function previous() {
    let prev = index;
    index = (index - 1 + size) % size;
    cards.forEach((card,i)=>{
        if(i==prev) {card.classList.add('card-hidden'); card.classList.remove('card-active');}
        if(i==index) {card.classList.remove('card-hidden'); card.classList.add('card-active')}
    })
}

function flip() {

}

document.addEventListener('keydown',(event)=>{
    if(event.key === 'ArrowRight') next();
    if(event.key === 'ArrowLeft') previous();
    if(event.key === 'ArrowUp') flip();
    if(event.key === 'ArrowDown') flip();
});