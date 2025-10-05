document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cards = document.querySelectorAll('.card');
    
    let currentIndex = 0;
    const totalCards = cards.length;
    const cardWidth = 70;
    
    function updateSlider() {
        const translateX = -currentIndex * cardWidth;
        slider.style.transform = `translateX(${translateX}vw)`;
    }

    function nextCard() {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateSlider();
        }
    }

    function prevCard() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }
    
    nextBtn.addEventListener('click', nextCard);
    prevBtn.addEventListener('click', prevCard);
    
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
    
    updateSlider();
});