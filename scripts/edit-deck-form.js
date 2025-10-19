let currentDeck = null;
document.addEventListener('DOMContentLoaded', () => {
    loadDeck();
    setupEventListeners();
});
function loadDeck() {
    const deckId = sessionStorage.getItem('selectedDeckId');
    if (!deckId) {
        showError('No deck selected for editing');
        return;
    }
    const decksData = localStorage.getItem('decks');
    if (!decksData) {
        showError('No decks found in storage');
        return;
    }   
    const decks = JSON.parse(decksData);
    currentDeck = decks.find(deck => deck.id === deckId);
    if (!currentDeck) {
        showError('Selected deck not found');
        return;
    }
    document.getElementById('setTitle').value = currentDeck.title || '';
    document.getElementById('setDescription').value = currentDeck.description || '';
    loadCardsIntoForm();
}

function showError(message) {
    alert(message);
    window.location.href = '../pages/edit-deck.html';
}
function loadCardsIntoForm() {
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = '';
    
    if (!currentDeck.cards || currentDeck.cards.length === 0) {
        addCardToForm();
        return;
    }

    currentDeck.cards.forEach((card, index) => {
        addCardToForm(card.front, card.back, card.imageLink);
    });
}

function addCardToForm(front = '', back = '', imageLink = '') {
    const cardsContainer = document.getElementById('cardsContainer');
    const cardIndex = cardsContainer.children.length;
    
    const cardHTML = `
        <div class="card" data-index="${cardIndex}">
            <div class="card-content">
                <div class="card-field">
                    <label>Front</label>
                    <input type="text" class="card-front" placeholder="Front side" value="${front}" required />
                </div>
                <div class="card-field">
                    <label>Back</label>
                    <input type="text" class="card-back" placeholder="Back side" value="${back}" required />
                </div>
            </div>
            <div class="card-image">
                <label>Image URL (optional)</label>
                <input type="text" class="card-image-url" placeholder="Image URL" value="${imageLink}" />
            </div>
            <div class="card-actions">
                <button type="button" class="btn-delete" data-index="${cardIndex}">Delete Card</button>
            </div>
        </div>
    `;
    
    cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
}

function setupEventListeners() {
    document.getElementById('addCardBtn').addEventListener('click', () => {
        addCardToForm();
    });
    document.getElementById('cancelBtn').addEventListener('click', () => {
        if (confirm('Are you sure you want to cancel? All changes will be lost.')) {
            window.location.href = '../pages/edit-deck.html';
        }
    });
    document.getElementById('cardsContainer').addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-delete')) {
            const cardElement = e.target.closest('.card');
            if (document.querySelectorAll('.card').length <= 1) {
                alert('Cannot delete the last card. A deck must have at least one card.');
                return;
            }
            if (confirm('Are you sure you want to delete this card?')) {
                cardElement.remove();
            }
        }
    });
    document.getElementById('flashcardForm').addEventListener('submit', (e) => {
        e.preventDefault();
        saveChanges();
    });
}

function saveChanges() {
    try {
        const title = document.getElementById('setTitle').value.trim();
        const description = document.getElementById('setDescription').value.trim();
        
        if (!title) {
            alert('Title is required');
            return;
        }
        const cards = [];
        const cardElements = document.querySelectorAll('.card');
        
        for (let i = 0; i < cardElements.length; i++) {
            const cardElement = cardElements[i];
            const front = cardElement.querySelector('.card-front').value.trim();
            const back = cardElement.querySelector('.card-back').value.trim();
            const imageLink = cardElement.querySelector('.card-image-url').value.trim();
            
            if (!front || !back) {
                alert(`Card ${i + 1} is incomplete. Both front and back are required.`);
                return;
            }
            
            cards.push({ front, back, imageLink });
        }
        currentDeck.title = title;
        currentDeck.description = description;
        currentDeck.cards = cards;
        const decksData = localStorage.getItem('decks');
        const decks = JSON.parse(decksData);
        const deckIndex = decks.findIndex(deck => deck.id === currentDeck.id);
        if (deckIndex === -1) {
            throw new Error('Deck not found in storage');
        }
        decks[deckIndex] = currentDeck;
        localStorage.setItem('decks', JSON.stringify(decks));
        
        alert('Changes saved successfully!');
        window.location.href = '../pages/edit-deck.html';
        
    } catch (error) {
        alert(`Error saving changes: ${error.message}`);
    }
}
