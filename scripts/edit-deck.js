let cards = [];
let index = 0;
let size = 0;
let decks = [];

function loadDecksFromStorage() {
    const storedDecks = localStorage.getItem('decks');
    if (storedDecks) {
        decks = JSON.parse(storedDecks);
        renderDeckCards();
    } else {
        showNoDecksMessage();
    }
}

function renderDeckCards() {
    const deckContainer = document.getElementById('deck-container');
    deckContainer.innerHTML = '';
    
    if (decks.length === 0) {
        showNoDecksMessage();
        return;
    }
    
    decks.forEach((deck, i) => {
        const cardElement = document.createElement('div');
        cardElement.className = i === 0 ? 'card card-active' : 'card card-hidden';
        const frontFace = document.createElement('div');
        frontFace.className = 'front-face';
        frontFace.innerHTML = `
            <div class="deck-info">
                <h1 class="deck-title">${deck.title}</h1>
                <div class="deck-stats">
                    <i class="fas fa-layer-group"></i>
                    <span>${deck.cards.length} Cards</span>
                </div>
            </div>
            <button class="card-button">Edit Deck</button>`;
        const backFace = document.createElement('div');
        backFace.className = 'back-face';
        backFace.innerHTML = `
            <p class="deck-description">${deck.description || "No description available"}</p>`;
        cardElement.appendChild(frontFace);
        cardElement.appendChild(backFace);
        deckContainer.appendChild(cardElement);
    });
    cards = document.querySelectorAll('.card');
    size = cards.length;
    addCardButtonListeners();
}

function showNoDecksMessage() {
    const deckContainer = document.getElementById('deck-container');
    deckContainer.innerHTML = `
        <div class="card card-active">
            <div class="front-face no-decks-message">
                <i class="fas fa-exclamation-circle card-icon"></i>
                <h2>No Decks Found</h2>
                <p>You haven't created any decks yet.</p>
                <button class="card-button" id="create-deck-btn">Create a Deck</button>
            </div>
            <div class="back-face"></div>
        </div>`;
    cards = document.querySelectorAll('.card');
    size = cards.length;
    
    document.getElementById('create-deck-btn').addEventListener('click', () => {
        window.location.href = '../pages/create-deck.html';
    });
}
function addCardButtonListeners() {
    const editButtons = document.querySelectorAll('.front-face .card-button');
    const modifyButtons = document.querySelectorAll('.back-face .card-button');
    
    editButtons.forEach((button, i) => {
        button.addEventListener('click', () => {
            openDeckEditor(decks[i].id);
        });
    });
    
    modifyButtons.forEach((button, i) => {
        button.addEventListener('click', () => {
            openDeckEditor(decks[i].id);
        });
    });
}

function openDeckEditor(deckId) {
    sessionStorage.setItem('selectedDeckId', deckId);
    window.location.href = '../pages/edit-deck-form.html';
}

function deleteCurrentDeck() {
    if (decks.length === 0) return;
    
    const currentDeck = decks[index];
    
    if (confirm(`Are you sure you want to delete "${currentDeck.title}"? This action cannot be undone.`)) {
        const storedDecks = localStorage.getItem('decks');
        if (!storedDecks) return;
        
        let allDecks = JSON.parse(storedDecks);
        
        allDecks = allDecks.filter(deck => deck.id !== currentDeck.id);
        
        localStorage.setItem('decks', JSON.stringify(allDecks));
        
        decks = allDecks;
        
        if (decks.length === 0) {
            showNoDecksMessage();
            index = 0;
        } else {
            if (index >= decks.length) {
                index = decks.length - 1;
            }
            const deckContainer = document.getElementById('deck-container');
            deckContainer.innerHTML = '';
            renderDeckCards();
            
            cards = document.querySelectorAll('.card');
            size = cards.length;
            
            cards.forEach((card, i) => {
                if (i === index) {
                    card.classList.remove('card-hidden');
                    card.classList.add('card-active');
                } else {
                    card.classList.add('card-hidden');
                    card.classList.remove('card-active');
                }
            });
        }
        
        alert('Deck deleted successfully!');
    }
}

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
    if (decks.length > 0) {
        const currentDeck = decks[index];
        openDeckEditor(currentDeck.id);
    } else if (document.getElementById('create-deck-btn')) {
        window.location.href = '../pages/create-deck.html';
    }
}

function goBackHome() {
    window.location.href = '../index.html';
}

document.addEventListener('keydown',(event)=>{
    if(event.key === 'ArrowRight') next();
    if(event.key === 'ArrowLeft') previous();
    if(event.key === 'ArrowUp' || event.key === 'ArrowDown') flip();
    if(event.key === 'Enter') selectCard();
    if(event.key === 'Escape') goBackHome();
});

document.getElementById('next-btn').addEventListener('click', next);
document.getElementById('prev-btn').addEventListener('click', previous);
document.getElementById('flip-btn').addEventListener('click', flip);
document.getElementById('select-btn').addEventListener('click', selectCard);
document.getElementById('delete-btn').addEventListener('click', deleteCurrentDeck);
document.getElementById('back-btn').addEventListener('click', goBackHome);
document.addEventListener('DOMContentLoaded', loadDecksFromStorage);
