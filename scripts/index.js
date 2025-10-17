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

function selectCard() {
    // Handle card selection - can be customized based on what should happen when a card is selected
    const selectedCard = cards[index].querySelector('.front-face').textContent.trim();
    console.log('Selected card:', selectedCard);
    
    // Navigate based on selected card
    if (selectedCard.includes('Load Deck')) {
        window.location.href = 'pages/load-deck.html';
    } else if (selectedCard.includes('Create New Deck')) {
        // Logic for creating deck
        alert('Creating new deck...');
    } else if (selectedCard.includes('Edit Deck')) {
        // Logic for editing deck
        alert('Editing deck...');
    } else {
        // Default action
        flip();
    }
}

// Keyboard navigation
document.addEventListener('keydown',(event)=>{
    if(event.key === 'ArrowRight') next();
    if(event.key === 'ArrowLeft') previous();
    if(event.key === 'ArrowUp' || event.key === 'ArrowDown') flip();
    if(event.key === 'Enter') selectCard();
});

// Button navigation
document.getElementById('next-btn').addEventListener('click', next);
document.getElementById('prev-btn').addEventListener('click', previous);
document.getElementById('flip-btn').addEventListener('click', flip);
document.getElementById('select-btn').addEventListener('click', selectCard);

// Initialize the first card as active
cards[0].classList.add('card-active');