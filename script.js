// Get references to the elements
const icon = document.getElementById('icon');
const clickText = document.getElementById('click-text');
const hiddenContent = document.getElementById('hidden-content');
const images = document.querySelectorAll('.image-grid img');
const overlay = document.getElementById('overlay');
const overlayContent = document.getElementById('overlay-content');
const closeButton = document.getElementById('close-btn');

// Fade in the text and icon on page load
window.addEventListener('load', () => {
    clickText.style.opacity = '1';
    icon.style.opacity = '1';
});

// Add click event listener to the icon
icon.addEventListener('click', () => {
    // Fade out the icon and the "Click on me!" text
    icon.style.opacity = '0';
    clickText.style.opacity = '0';

    // After fading out, display the hidden content
    setTimeout(() => {
        icon.style.display = 'none';
        clickText.style.display = 'none';
        hiddenContent.style.display = 'block';
        hiddenContent.style.opacity = '1';

        // Add the 'visible' class to each image for the smooth fade-in effect
        images.forEach((img, index) => {
            setTimeout(() => {
                img.classList.add('visible');
            }, (index + 1) * 200); // Add a 0.2s delay for the first image as well
        });
    }, 500); // Matches the CSS transition time (0.5s)
});

// Function to show overlay with text
images.forEach(img => {
    img.addEventListener('click', () => {
        const text = img.getAttribute('data-text'); // Get the text for the clicked image
        overlayContent.innerText = text; // Set the text in the overlay
        overlay.style.display = 'flex'; // Show the overlay
        setTimeout(() => {
            overlay.style.opacity = '1'; // Fade-in effect
        }, 10);
    });
});

// Function to close the overlay
closeButton.addEventListener('click', () => {
    overlay.style.opacity = '0'; // Fade-out effect
    setTimeout(() => {
        overlay.style.display = 'none'; // Hide the overlay after fade-out
    }, 500); // Matches the fade-out duration
});
