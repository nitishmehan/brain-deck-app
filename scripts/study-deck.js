let currentDeck = null;
let cards = [];
let index = 0;
let size = 0;

document.addEventListener('DOMContentLoaded', function() {
    loadDeck();
});

function loadDeck() {
    const deckId = sessionStorage.getItem('selectedDeckId');
    if (!deckId) {
        showError("No deck selected. Please go back and select a deck.");
        return;
    }
    
    const decksString = localStorage.getItem('decks');
    if (!decksString) {
        showError("No decks found in storage.");
        return;
    }
    
    const decks = JSON.parse(decksString);
    currentDeck = decks.find(deck => deck.id === deckId);
    
    if (!currentDeck) {
        showError("Selected deck not found.");
        return;
    }
    
    document.getElementById('deck-title').textContent = currentDeck.title;
    document.getElementById('total-cards').textContent = currentDeck.cards.length;
    
    renderCards();
}

function showError(message) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = `
        <div class="card card-active">
            <div class="front-face">
                <i class="fas fa-exclamation-triangle card-icon"></i>
                <h2>Error</h2>
                <p>${message}</p>
                <button class="card-button" onclick="goBackToDecks()">Back to Decks</button>
            </div>
            <div class="back-face"></div>
        </div>
    `;
}

function createCard(cardData, index) {
    const { front, back, imageLink } = cardData;
    const card = document.createElement('div');
    card.className = `card ${index === 0 ? 'card-active' : 'card-hidden'}`;
    
    const frontFace = document.createElement('div');
    frontFace.className = 'front-face';
    frontFace.textContent = front;
    
    const backFace = document.createElement('div');
    backFace.className = `back-face ${!imageLink ? 'no-image' : ''}`;
    
    const backContent = document.createElement('div');
    backContent.className = 'back-content';
    backContent.textContent = back;
    
    backFace.appendChild(backContent);
    
    if (imageLink) {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'card-image-container';
        
        const img = document.createElement('img');
        img.className = 'card-image';
        img.src = imageLink;
        img.alt = 'Card illustration';
        
        imageContainer.appendChild(img);
        backFace.appendChild(imageContainer);
    }
    
    card.appendChild(frontFace);
    card.appendChild(backFace);
    card.addEventListener('click', flip);
    return card;
}

function renderCards() {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    
    currentDeck.cards.forEach((card, i) => {
        const cardElement = createCard(card, i);
        cardContainer.appendChild(cardElement);
    });
    cards = document.querySelectorAll('.card');
    size = cards.length;
    updateCardCounter();
}

function updateCardCounter() {
    const currentCardEl = document.getElementById('current-card');
    const progressBar = document.getElementById('progress-bar');
    
    if (size > 0) {
        currentCardEl.textContent = index + 1;
        const progress = ((index + 1) / size) * 100;
        progressBar.style.width = `${progress}%`;
    }
}
function next() {
    if (size <= 0) return;
    
    let prev = index;
    cards[prev].classList.remove('flip');
    index = (index + 1) % size;
    cards[prev].classList.add('card-hidden'); 
    cards[prev].classList.remove('card-active');
    cards[index].classList.remove('card-hidden'); 
    cards[index].classList.add('card-active');    
    updateCardCounter();
}

function previous() {
    if (size <= 0) return;
    
    let prev = index;
    cards[prev].classList.remove('flip');
    index = (index - 1 + size) % size;
    
    cards[prev].classList.add('card-hidden'); 
    cards[prev].classList.remove('card-active');
    cards[index].classList.remove('card-hidden'); 
    cards[index].classList.add('card-active');
    
    updateCardCounter();
}

function flip() {
    if (cards[index]) {
        cards[index].classList.toggle('flip');
    }
}

function goBackToDecks() {
    window.location.href = '../pages/load-deck.html';
}
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') next();
    if (event.key === 'ArrowLeft') previous();
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') flip();
    if (event.key === 'Escape') goBackToDecks();
});

document.getElementById('next-btn').addEventListener('click', next);
document.getElementById('prev-btn').addEventListener('click', previous);
document.getElementById('flip-btn').addEventListener('click', flip);
document.getElementById('back-btn').addEventListener('click', goBackToDecks);
