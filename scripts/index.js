let cards = document.querySelectorAll('.card');
let index = 0;
let size = cards.length;

function next() {
    let prev = index;
    cards[prev].classList.remove('flip');
    index = (index+1)%size;
    cards.forEach((card,i)=>{
        if(i==prev) {card.classList.add('card-hidden'); card.classList.remove('card-active');}
        if(i==index) {card.classList.remove('card-hidden'); card.classList.add('card-active')}
    })
}

function previous() {
    let prev = index;
    cards[prev].classList.remove('flip');
    index = (index - 1 + size) % size;
    cards[prev].classList.add('card-hidden'); cards[prev].classList.remove('card-active');
    cards[index].classList.remove('card-hidden'); cards[index].classList.add('card-active')
}

function flip() {
    cards[index].classList.toggle('flip');
}

document.addEventListener('keydown',(event)=>{
    if(event.key === 'ArrowRight') next();
    if(event.key === 'ArrowLeft') previous();
    if(event.key === 'ArrowUp') flip();
    if(event.key === 'ArrowDown') flip();
});