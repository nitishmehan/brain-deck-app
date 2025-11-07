let cards = document.querySelectorAll('.card');
let index = 0;
let size = cards.length;

function next() {
    let prev = index;
    cards[prev].classList.remove('flip');
    index = (index+1)%size;
    cards[prev].classList.add('card-hidden'); cards[prev].classList.remove('card-active');
    cards[index].classList.remove('card-hidden'); cards[index].classList.add('card-active')
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

function selectCard() {
    const selectedCard = cards[index].querySelector('.front-face').textContent.trim();
    console.log('Selected card:', selectedCard);
    
    if (selectedCard.includes('Load Deck')) {
        window.location.href = 'pages/load-deck.html';
    } else if (selectedCard.includes('Create New Deck')) {
        window.location.href = 'pages/create-deck.html';
    } else if (selectedCard.includes('Edit Deck')) {
        window.location.href = 'pages/edit-deck.html';
    } else {
        next();
    }
}

document.addEventListener('keydown',(event)=>{
    if(event.key === 'ArrowRight') next();
    if(event.key === 'ArrowLeft') previous();
    if(event.key === 'ArrowUp' || event.key === 'ArrowDown') flip();
    if(event.key === 'Enter') selectCard();
});

document.getElementById('next-btn').addEventListener('click', next);
document.getElementById('prev-btn').addEventListener('click', previous);
document.getElementById('flip-btn').addEventListener('click', flip);
document.getElementById('select-btn').addEventListener('click', selectCard);
cards.forEach(card => card.addEventListener('click', selectCard));
cards[0].classList.add('card-active');