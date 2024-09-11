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
        // Animate fade-out for both text and icon
        clickText.style.transition = "opacity 1s ease";
        icon.style.transition = "opacity 1s ease";
        clickText.style.opacity = 0;
        icon.style.opacity = 0;
        
        setTimeout(() => {
            // After the fade-out, hide the icon and text, show hidden content
            clickText.style.display = "none";
            icon.style.display = "none";
            hiddenContent.style.display = "block";
            
            // Animate fade-in for hidden content
            hiddenContent.style.opacity = 0;
            hiddenContent.style.transition = "opacity 1s ease";
            setTimeout(() => {
                hiddenContent.style.opacity = 1;
                images.forEach(img => img.classList.add("visible"));
            }, 100); // Short delay before starting fade-in
        }, 1000); // Match the transition time of the fade-out
    });

    // Handle click on images to show overlay with text
    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            let texts = ["ME ENCANTA JUGAR JUEGUITOS CONTIGOOO! Me lo paso super bien cuando jugamos y me divierto muchísimo :3", "Adoro que nos dibujes juntitos <3 (si yo supiera dibujar así de bien lo haría también :p)", "Poder juntar mi persona favorita y mi pasión favorita es como un sueño hecho realidad (˶ᵔ ᵕ ᵔ˶)", "Darte la manita y sentirte me hace sentir muy seguro <3"];
            overlayText.innerText = texts[index];
            overlay.style.display = "flex";
            setTimeout(() => {
                overlay.style.opacity = 1;
            }, 100);
        });
    });

    // Close overlay
    closeBtn.addEventListener("click", () => {
        overlay.style.opacity = 0;
        setTimeout(() => {
            overlay.style.display = "none";
        }, 500);
    });
});
