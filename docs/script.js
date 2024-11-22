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

// Next Button Logic
nextButton.addEventListener('click', () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
  } else {
    currentSlide = 0; // Loop back to the first slide
  }
  updateSlide();
});

// Previous Button Logic
prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = totalSlides - 1; // Loop to the last slide
  }
  updateSlide();
});

// Dot Navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateSlide();
  });
});

// Initialize the slideshow
updateSlide();
