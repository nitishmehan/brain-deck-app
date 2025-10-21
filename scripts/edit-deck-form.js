let currentDeck = null;
let cardCount = 0;

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
    
    const titleInput = document.getElementById('setTitle');
    const descInput = document.getElementById('setDescription');
    
    titleInput.value = currentDeck.title || '';
    descInput.value = currentDeck.description || '';
    
    updateCharCount('title-count', titleInput.value.length, 50);
    updateCharCount('description-count', descInput.value.length, 100);
    
    loadCardsIntoForm();
}

function showError(message) {
    alert(message);
    window.location.href = '../pages/edit-deck.html';
}

function updateCharCount(elementId, current, max) {
    const countElement = document.getElementById(elementId);
    if (countElement) {
        countElement.textContent = `${current}/${max}`;
        countElement.style.color = current > max * 0.9 ? '#ff6b6b' : 'rgba(255, 255, 255, 0.5)';
    }
}
function loadCardsIntoForm() {
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = '';
    
    if (!currentDeck.cards || currentDeck.cards.length === 0) {
        addCardToForm();
        return;
    }
    
    currentDeck.cards.forEach((card) => {
        addCardToForm(card.front, card.back, card.imageLink);
    });
}

function addCardToForm(front = '', back = '', imageLink = '') {
    cardCount++;
    const cardsContainer = document.getElementById('cardsContainer');
    
    const cardHTML = `
        <div class="card" data-card-id="${cardCount}">
            <div class="card-content">
                <div class="card-field">
                    <label>Front</label>
                    <input type="text" class="card-front" placeholder="Front side (max 500 characters)" maxlength="500" value="${front}" required />
                    <span class="char-count" id="front-count-${cardCount}">0/500</span>
                </div>
                <div class="card-field">
                    <label>Back</label>
                    <textarea class="card-back" placeholder="Back side (no character limit)" rows="3" required>${back}</textarea>
                </div>
            </div>
            <div class="card-image">
                <label>Image URL (optional)</label>
                <input type="text" class="card-image-url" placeholder="Image URL" maxlength="500" value="${imageLink}" />
            </div>
            <div class="card-actions">
                <button type="button" class="btn-delete" data-card-id="${cardCount}">Delete Card</button>
            </div>
        </div>
    `;
    
    cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
    
    const card = cardsContainer.querySelector(`[data-card-id="${cardCount}"]`);
    const frontInput = card.querySelector('.card-front');
    updateCharCount(`front-count-${cardCount}`, frontInput.value.length, 500);
    
    frontInput.addEventListener('input', () => 
        updateCharCount(`front-count-${cardCount}`, frontInput.value.length, 500)
    );
}

function setupEventListeners() {
    document.getElementById('addCardBtn').addEventListener('click', () => {
        addCardToForm();
    });

    const titleInput = document.getElementById('setTitle');
    const descInput = document.getElementById('setDescription');
    
    titleInput.addEventListener('input', () => updateCharCount('title-count', titleInput.value.length, 50));
    descInput.addEventListener('input', () => updateCharCount('description-count', descInput.value.length, 100));

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
