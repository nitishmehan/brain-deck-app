let cardCount = 0;

function createCardElement(cardNumber) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = `cardId-${cardNumber}`;

    card.innerHTML = `
        <div class="card-content">
            <div class="card-field">
                <label>FRONT</label>
                <input type="text" class="card-front" placeholder="Enter front content" required>
                <div class="error-message" style="display: none;">Front content is required</div>
            </div>
            <div class="card-field">
                <label>BACK</label>
                <input type="text" class="card-back" placeholder="Enter back content">
            </div>
        </div>
        <div class="card-image">
            <label>Image Link</label>
            <input type="url" class="card-image-link" placeholder="https://example.com/image.jpg">
        </div>
        <div class="card-actions">
            <button type="button" class="btn-delete" onclick="deleteCard(${cardNumber})">Delete</button>
        </div>
        `;

    return card;
}

function addCard() {
    cardCount++;
    const container = document.getElementById('cardsContainer');
    const card = createCardElement(cardCount);
    container.appendChild(card);
}

function deleteCard(cardNumber) {
    const card = document.getElementById(`cardId-${cardNumber}`);
    card.remove();
}

document.getElementById('addCardBtn').addEventListener('click', addCard);

document.getElementById('cancelBtn').addEventListener('click', () => {
    if (confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
        document.getElementById('flashcardForm').reset();
        document.getElementById('cardsContainer').innerHTML = '';
        cardCount = 0;
    }
});

document.getElementById('flashcardForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('setTitle').value;
    const description = document.getElementById('setDescription').value;
    const cards = [];

    document.querySelectorAll('.card').forEach(card => {
        cards.push({
            front: card.querySelector('.card-front').value,
            back: card.querySelector('.card-back').value,
            imageLink: card.querySelector('.card-image-link').value
        });
    });

    const deckId = Date.now().toString();
    const deck = {
        id: deckId,
        title,
        description,
        cards,
    };

    let decks = JSON.parse(localStorage.getItem('decks') || '[]');
    
    decks.push(deck);

    localStorage.setItem('decks', JSON.stringify(decks));

    console.log('Flashcard Set Created:', deck);
    alert('Flashcard set created successfully!\n\nTitle: ' + title + '\nCards: ' + cards.length);
    
    window.location.href = '../index.html';
});

addCard();