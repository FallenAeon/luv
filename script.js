document.addEventListener("DOMContentLoaded", () => {
    const icon = document.getElementById("icon");
    const clickText = document.getElementById("click-text");
    const hiddenContent = document.getElementById("hidden-content");
    const images = document.querySelectorAll(".image-grid img");
    const overlay = document.getElementById("overlay");
    const overlayText = document.getElementById("overlay-text");
    const closeBtn = document.getElementById("close-btn");

    // Show the icon and click text with fade-in
    setTimeout(() => {
        icon.style.opacity = 1;
        clickText.style.opacity = 1;
    }, 500);

    // Icon click handler
    icon.addEventListener("click", () => {
        clickText.style.opacity = 0;
        icon.style.opacity = 0;
        setTimeout(() => {
            clickText.style.display = "none";
            icon.style.display = "none";
            hiddenContent.style.display = "block";
            setTimeout(() => {
                hiddenContent.style.opacity = 1;
                images.forEach(img => img.classList.add("visible"));
            }, 500); // Delay to make sure hidden content fades in after icon disappears
        }, 1000); // Adjusted delay for smoother fade-out
    });

    // Handle click on images to show overlay with text
    images.forEach(img => {
        img.addEventListener("click", (event) => {
            overlayText.textContent = event.target.alt; // Show the alt text of the clicked image
            overlay.style.display = "block";
            setTimeout(() => {
                overlay.style.opacity = 1;
            }, 10); // Small delay to ensure display block takes effect
        });
    });

    // Close the overlay when clicking the close button
    closeBtn.addEventListener("click", () => {
        overlay.style.opacity = 0;
        setTimeout(() => {
            overlay.style.display = "none";
        }, 500); // Match this with the CSS transition duration
    });

    // Hide the overlay when clicking outside of the overlay
    window.addEventListener("click", (event) => {
        if (event.target === overlay) {
            overlay.style.opacity = 0;
            setTimeout(() => {
                overlay.style.display = "none";
            }, 500); // Match this with the CSS transition duration
        }
    });
});
