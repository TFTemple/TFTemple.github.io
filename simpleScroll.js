// Simple scroll effect - just adds a class when cards are visible
function checkVisible() {
    // Uses DOM; targtets both course and interest cards, since these classes are essentially the same.
    const cards = document.querySelectorAll('.courseCard, .interestCard');
    
    // For each card, check if it's visible on the screen.
    cards.forEach(card => {
        // This method returns an object containing the size+position of the card.
        // I'm using the 'top' and 'bottom' properties to check if the card 
        // is visible on the top or bottom of the screen. This is where the fade-in effect
        // should be triggered.
        const rect = card.getBoundingClientRect();
        // Just check if the itterated card is within the viewport.
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        // If it's visible, add to the class 'visible' to trigger the fade-in effect.
        // .visible is used in the style sheets 'interestsStyles.css' and 'coursesStyles.css'.
        if (isVisible) {
            card.classList.add('visible');
        }
    });
}

// Check when page loads and when user scrolls, and call checkVisible() accordingly.
window.addEventListener('load', checkVisible); 
window.addEventListener('scroll', checkVisible); 