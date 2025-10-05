document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cards = document.querySelectorAll('.card');
    
    let currentIndex = 0;
    const totalCards = cards.length;
    const cardWidth = 70; // 70vw as defined in CSS
    
    // Function to update slider position
    function updateSlider() {
        const translateX = -currentIndex * cardWidth;
        slider.style.transform = `translateX(${translateX}vw)`;
    }
    
    // Function to go to next card
    function nextCard() {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateSlider();
        }
    }
    
    // Function to go to previous card
    function prevCard() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }
    
    // Button event listeners
    nextBtn.addEventListener('click', nextCard);
    prevBtn.addEventListener('click', prevCard);
    
    // Keyboard event listener
    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case 'ArrowLeft':
                event.preventDefault();
                prevCard();
                break;
            case 'ArrowRight':
                event.preventDefault();
                nextCard();
                break;
        }
    });
    
    // Initialize slider position
    updateSlider();
});