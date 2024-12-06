const slides = document.querySelector('.testimonial-cards');
const dots = document.querySelectorAll('.dot');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

let currentSlide = 0; // Current slide index
const cardsPerSlide = 2; // Number of cards visible per slide
const totalCards = slides.children.length; // Total number of cards
const totalSlides = Math.ceil(totalCards / cardsPerSlide); // Total groups of slides

function updateSlide() {
  const cardWidth = document.querySelector('.testimonial-card').offsetWidth;
  const gap = 16; // Adjust based on the gap between cards in your CSS
  const slideWidth = (cardWidth + gap) * cardsPerSlide; // Width for one "slide"
  slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  
  // Update dots
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

// Auto-Play Function
function autoPlay() {
  currentSlide = (currentSlide + 1) % totalSlides; // Increment and loop back to the start
  updateSlide();
}

// Interval for Auto-Play
let autoPlayInterval = setInterval(autoPlay, 5000); // Change slides every 5 seconds

// Next Button Logic
nextButton.addEventListener('click', () => {
  clearInterval(autoPlayInterval); // Reset auto-play timer when manually navigating
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
  } else {
    currentSlide = 0; // Loop back to the first slide
  }
  updateSlide();
  autoPlayInterval = setInterval(autoPlay, 5000); // Restart auto-play
});

// Previous Button Logic
prevButton.addEventListener('click', () => {
  clearInterval(autoPlayInterval); // Reset auto-play timer when manually navigating
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = totalSlides - 1; // Loop to the last slide
  }
  updateSlide();
  autoPlayInterval = setInterval(autoPlay, 5000); // Restart auto-play
});

// Dot Navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(autoPlayInterval); // Reset auto-play timer when manually navigating
    currentSlide = index;
    updateSlide();
    autoPlayInterval = setInterval(autoPlay, 5000); // Restart auto-play
  });
});

// Initialize the slideshow
updateSlide();


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show'); // Toggle menu visibility
      hamburger.classList.toggle('active'); // Animate hamburger icon
  });
});