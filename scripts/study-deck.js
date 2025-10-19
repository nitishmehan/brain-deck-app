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

function renderCards() {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    
    currentDeck.cards.forEach((card, i) => {
        const cardElement = document.createElement('div');
        cardElement.className = i === 0 ? 'card card-active' : 'card card-hidden';
        
        const frontFace = document.createElement('div');
        frontFace.className = 'front-face';
        frontFace.innerHTML = `<div>${card.front}</div>`;
        const backFace = document.createElement('div');
        const hasImage = card.imageLink && card.imageLink.trim() !== "";
        backFace.className = hasImage ? 'back-face' : 'back-face no-image';
        const backContent = document.createElement('div');
        backContent.className = 'back-content';
        backContent.innerHTML = card.back;
        backFace.appendChild(backContent);
        if (hasImage) {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'card-image-container';
            
            const image = document.createElement('img');
            image.src = card.imageLink;
            image.alt = "Card Image";
            image.className = 'card-image';
            imageContainer.appendChild(image);
            backFace.appendChild(imageContainer);
        }
        cardElement.appendChild(frontFace);
        cardElement.appendChild(backFace);
        cardContainer.appendChild(cardElement);
    });
    cards = document.querySelectorAll('.card');
    size = cards.length;
    updateCardCounter();
}

function updateCardCounter() {
    const currentCardEl = document.getElementById('current-card');
    
    if (size > 0) {
        currentCardEl.textContent = index + 1;
    }
}
function next() {
    if (size <= 0) return;
    
    let prev = index;
    cards[prev].classList.remove('flip');
    index = (index + 1) % size;
    
    cards.forEach((card, i) => {
        if (i === prev) {
            card.classList.add('card-hidden'); 
            card.classList.remove('card-active');
        }
        if (i === index) {
            card.classList.remove('card-hidden'); 
            card.classList.add('card-active');
        }
    });
    
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
