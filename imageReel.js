let slideIndex = 1; // Variable to keep track of the current slide.
showSlides(slideIndex); // Immediately the main function, showSlides(), when the page loads, which displays the first slide.

// Auto advance to next slide every 5 seconds; uses built in function 'setInterval()'.
setInterval(() => {changeSlide(1);}, 5000);

// Calls showSlides() with an incremented index.
function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    // Get all slides on the page.
    let slides = document.getElementsByClassName("imageSlide");
    
    // If the index is greater than the number of slides, loop back to the first slide.
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    // Reset all slides by setting each slide 'display' parameter to 'none'.
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Show current slide.
    slides[slideIndex - 1].style.display = "block";
} 