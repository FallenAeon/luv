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
            }, 200); // Slight delay before showing hidden content
        }, 1000); // Make the icon fade out smoothly
    });

    // Handle click on images to show overlay with text
    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            let texts = ["Texto para la imagen 1", "Texto para la imagen 2", "Texto para la imagen 3", "Texto para la imagen 4"];
            overlayText.innerText = texts[index];
            overlay.style.display = "flex";
            setTimeout(() => {
                overlay.style.opacity = 1;
            }, 100);
        });
    });

    // Close overlay
    closeBtn.addEventListener("click", ()
