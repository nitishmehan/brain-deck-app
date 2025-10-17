// Variables to track cards and navigation
let decks = [];
let cards = [];
let index = 0;
let size = 0;

// Load decks from localStorage
function loadDecksFromStorage() {
    const storedDecks = localStorage.getItem('decks');
    if (storedDecks) {
        decks = JSON.parse(storedDecks);
        renderDeckCards();
    } else {
        showNoDecksMessage();
    }
}

// Render cards for each deck
function renderDeckCards() {
    const deckContainer = document.getElementById('deck-container');
    // Clear the loading card
    deckContainer.innerHTML = '';
    
    if (decks.length === 0) {
        showNoDecksMessage();
        return;
    }
    
    decks.forEach((deck, i) => {
        const cardElement = document.createElement('div');
        cardElement.className = i === 0 ? 'card card-active' : 'card card-hidden';
        
        // Create front face with deck details
        const frontFace = document.createElement('div');
        frontFace.className = 'front-face';
        frontFace.innerHTML = `
            <div class="deck-info">
                <h3 class="deck-title">${deck.title}</h3>
                <p class="deck-description">${deck.description}</p>
                <div class="deck-stats">
                    <i class="fas fa-layer-group"></i>
                    <span>${deck.cards.length} Cards</span>
                </div>
            </div>
            <button class="card-button">Study Now</button>
        `;
        
        // Create back face with additional info
        const backFace = document.createElement('div');
        backFace.className = 'back-face';
        backFace.innerHTML = `
            <h2>Deck Details</h2>
            <p>ID: ${deck.id}</p>
            <p>Total cards: ${deck.cards.length}</p>
            <p>Created: ${new Date().toLocaleDateString()}</p>
            <button class="card-button">Open Deck</button>
        `;
        
        cardElement.appendChild(frontFace);
        cardElement.appendChild(backFace);
        deckContainer.appendChild(cardElement);
    });
    
    // Update cards array and size
    cards = document.querySelectorAll('.card');
    size = cards.length;
    
    // Add event listeners to buttons within cards
    addCardButtonListeners();
}

// Show message when no decks are available
function showNoDecksMessage() {
    const deckContainer = document.getElementById('deck-container');
    deckContainer.innerHTML = `
        <div class="card card-active">
            <div class="front-face no-decks-message">
                <h2>No Decks Found</h2>
                <p>You haven't created any decks yet.</p>
                <button class="card-button" id="create-deck-btn">Create a Deck</button>
            </div>
            <div class="back-face"></div>
        </div>
    `;
    
    cards = document.querySelectorAll('.card');
    size = cards.length;
    
    document.getElementById('create-deck-btn').addEventListener('click', () => {
        window.location.href = '../pages/create-deck.html';
    });
}

// Add event listeners to buttons within cards
function addCardButtonListeners() {
    const studyButtons = document.querySelectorAll('.front-face .card-button');
    const openButtons = document.querySelectorAll('.back-face .card-button');
    
    studyButtons.forEach((button, i) => {
        button.addEventListener('click', () => {
            openDeck(decks[i].id);
        });
    });
    
    openButtons.forEach((button, i) => {
        button.addEventListener('click', () => {
            openDeck(decks[i].id);
        });
    });
}

// Open a deck for studying
function openDeck(deckId) {
    // Store selected deck ID in sessionStorage
    sessionStorage.setItem('selectedDeckId', deckId);
    window.location.href = '../pages/study-deck.html';
}

// Navigation functions
function next() {
    if (size <= 1) return;
    
    let prev = index;
    cards[prev].classList.remove('flip');
    index = (index+1)%size;
    cards.forEach((card,i)=>{
        if(i==prev) {card.classList.add('card-hidden'); card.classList.remove('card-active');}
        if(i==index) {card.classList.remove('card-hidden'); card.classList.add('card-active')}
    });
}

function previous() {
    if (size <= 1) return;
    
    let prev = index;
    cards[prev].classList.remove('flip');
    index = (index - 1 + size) % size;
    cards[prev].classList.add('card-hidden'); cards[prev].classList.remove('card-active');
    cards[index].classList.remove('card-hidden'); cards[index].classList.add('card-active');
}

function flip() {
    cards[index].classList.toggle('flip');
}

function selectCard() {
    // Select current card (open the deck)
    if (decks.length > 0) {
        const currentDeck = decks[index];
        openDeck(currentDeck.id);
    } else if (document.getElementById('create-deck-btn')) {
        // If we're showing the "no decks" message
        window.location.href = '../pages/create-deck.html';
    }
}

// Go back to home
function goBackHome() {
    window.location.href = '../index.html';
}

// Keyboard navigation
document.addEventListener('keydown',(event)=>{
    if(event.key === 'ArrowRight') next();
    if(event.key === 'ArrowLeft') previous();
    if(event.key === 'ArrowUp' || event.key === 'ArrowDown') flip();
    if(event.key === 'Enter') selectCard();
    if(event.key === 'Escape') goBackHome();
});

// Button navigation
document.getElementById('next-btn').addEventListener('click', next);
document.getElementById('prev-btn').addEventListener('click', previous);
document.getElementById('flip-btn').addEventListener('click', flip);
document.getElementById('select-btn').addEventListener('click', selectCard);
document.getElementById('back-btn').addEventListener('click', goBackHome);

// Initialize
document.addEventListener('DOMContentLoaded', loadDecksFromStorage);
