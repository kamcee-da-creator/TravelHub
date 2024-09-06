// const slideshowContainer = document.querySelector('.slideshow-container');
// const slides = document.querySelectorAll('.sliders');
// const totalSlides = slides.length;

// // Clone the slides to create a seamless loop
// slides.forEach(slide => {
//     slideshowContainer.appendChild(slide.cloneNode(true));
// });

// let animationDuration = 10; // Duration in seconds
// let currentPosition = 0;

// function startSlideshow() {
//     currentPosition++;
//     if (currentPosition >= totalSlides * 180) {
//         currentPosition = 0;
//         slideshowContainer.style.transition = 'none'; // Disable transition for reset
//     } else {
//         slideshowContainer.style.transition = 'transform 0.5s linear'; // Re-enable transition
//     }
//     slideshowContainer.style.transform = `translateX(-${currentPosition}%)`;
// }

// setInterval(startSlideshow, (animationDuration * 1000) / totalSlides);
