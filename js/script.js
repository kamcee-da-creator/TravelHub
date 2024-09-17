// Select all the images within the element that has the class "slides"
const slides = document.querySelectorAll(".slides img");

// Initialize the current slide index to 0 (this means we start with the first image)
let slideIndex = 0;

// Initialize a variable to store the interval ID (used to automatically change slides)
let intervalId = null;

// Wait for the whole page (HTML) to load before running the initializeSlider function
document.addEventListener("DOMContentLoaded", initializeSlider);

// This function sets up the slider when the page is first loaded
function initializeSlider() {
    // Check if there are any slides (images) to show
    if (slides.length > 0) {
        // Show the first slide (index 0)
        showSlide(slideIndex);

        // Set up the automatic slide change every 3 seconds (3000 milliseconds)
        intervalId = setInterval(nextSlide, 6000);
    }
}

// This function displays the slide at the given index
function showSlide(index) {
    // If the index is greater than the number of slides, reset to the first slide
    if (index >= slides.length) {
        slideIndex = 0;
    } 
    // If the index is less than 0, go to the last slide
    else if (index < 0) {
        slideIndex = slides.length - 1;
    } 
    // Otherwise, set the slideIndex to the given index
    else {
        slideIndex = index;
    }

    // Remove the "displaySlide" class from all slides to hide them
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    // Add the "displaySlide" class to the slide at the current slideIndex to show it
    slides[slideIndex].classList.add("displaySlide");
}

// This function is called when the "Previous" button is clicked
function prevSlide() {
    // Stop the automatic slide change when the user manually changes slides
    clearInterval(intervalId);

    // Decrease the slideIndex by 1 to move to the previous slide
    slideIndex--;

    // Show the slide at the updated slideIndex
    showSlide(slideIndex);
}

// This function is called when the "Next" button is clicked or when the interval runs
function nextSlide() {
    // Increase the slideIndex by 1 to move to the next slide
    slideIndex++;

    // Show the slide at the updated slideIndex
    showSlide(slideIndex);
}

function loginPage(){
    window.location.href = "./login.html";
}