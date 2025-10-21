let cardCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    addCard();
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('addCardBtn').addEventListener('click', addCard);
    document.getElementById('cancelBtn').addEventListener('click', handleCancel);
    document.getElementById('flashcardForm').addEventListener('submit', handleSubmit);
    
    const titleInput = document.getElementById('setTitle');
    const descInput = document.getElementById('setDescription');
    
    titleInput.addEventListener('input', () => updateCharCount('title-count', titleInput.value.length, 50));
    descInput.addEventListener('input', () => updateCharCount('description-count', descInput.value.length, 100));
}

function updateCharCount(elementId, current, max) {
    const countElement = document.getElementById(elementId);
    if (countElement) {
        countElement.textContent = `${current}/${max}`;
        countElement.style.color = current > max * 0.9 ? '#ff6b6b' : 'rgba(255, 255, 255, 0.5)';
    }
}

function addCard() {
    cardCount++;
    const cardsContainer = document.getElementById('cardsContainer');
    const cardHTML = `
        <div class="card" data-card-id="${cardCount}">
            <div class="card-content">
                <div class="card-field">
                    <label>Front</label>
                    <input type="text" class="card-front" placeholder="Front side (max 500 characters)" maxlength="500" required />
                    <span class="char-count" id="front-count-${cardCount}">0/500</span>
                </div>
                <div class="card-field">
                    <label>Back</label>
                    <textarea class="card-back" placeholder="Back side (no character limit)" rows="3" required></textarea>
                </div>
            </div>
            <div class="card-image">
                <label>Image URL (optional)</label>
                <input type="text" class="card-image-url" placeholder="Image URL (max 500 characters)" maxlength="500" />
            </div>
            <div class="card-actions">
                <button type="button" class="btn-delete" onclick="deleteCard(${cardCount})">Delete Card</button>
            </div>
        </div>
    `;
    
    cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
    const card = cardsContainer.querySelector(`[data-card-id="${cardCount}"]`);
    const frontInput = card.querySelector('.card-front');
    
    frontInput.addEventListener('input', () => 
        updateCharCount(`front-count-${cardCount}`, frontInput.value.length, 500)
    );
}

function deleteCard(cardId) {
    const cards = document.querySelectorAll('.card');
    if (cards.length <= 1) {
        alert('You must have at least one card.');
        return;
    }
    const card = document.querySelector(`[data-card-id="${cardId}"]`);
    if (card) {
        card.remove();
    }
}

function handleCancel() {
    if (confirm('Are you sure you want to cancel? All changes will be lost.')) {
        window.location.href = '../index.html';
    }
}

function handleSubmit(e) {
    e.preventDefault();
    
    const title = document.getElementById('setTitle').value.trim();
    const description = document.getElementById('setDescription').value.trim();
    
    const cards = [];
    const cardElements = document.querySelectorAll('.card');
    
    cardElements.forEach((cardElement) => {
        const front = cardElement.querySelector('.card-front').value.trim();
        const back = cardElement.querySelector('.card-back').value.trim();
        const imageLink = cardElement.querySelector('.card-image-url').value.trim();
        
        if (front && back) {
            cards.push({ front, back, imageLink });
        }
    });
    
    if (cards.length === 0) {
        alert('Please add at least one card with front and back content.');
        return;
    }
    
    const deck = {
        id: Date.now().toString(),
        title,
        description,
        cards
    };
    const decks = JSON.parse(localStorage.getItem('decks') || '[]');
    decks.push(deck);
    localStorage.setItem('decks', JSON.stringify(decks));
    
    alert('Deck created successfully!');
    window.location.href = '../index.html';
}