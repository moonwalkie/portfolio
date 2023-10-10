document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImagesContainer = document.getElementById("lightbox-images-container");
    const closeButton = document.getElementById("close");

    // Function to open the lightbox with an array of image sources
    function openLightbox(imageSrcArray) {
        // Clear the existing content in the lightbox
        lightboxImagesContainer.innerHTML = "";

        // Add each image to the lightbox
        imageSrcArray.forEach((src) => {
            const image = document.createElement("img");
            image.src = src;
            lightboxImagesContainer.appendChild(image);
        });

        lightbox.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling of the page underneath
    }

    // Function to close the lightbox
    function closeLightbox() {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling of the page again
    }

    // Attach click event listener to every box
    const box1 = document.querySelector(".box.one");

    box1.addEventListener("click", function () {
        const imageSrcArray = [
            "./images/gta-v-photo-manipulation/XSS-GTA-V-Ocean-BG.jpg",
            "./images/gta-v-photo-manipulation/XSS-GTA-V-Evening-BG-7.jpg",
            "./images/gta-v-photo-manipulation/XSS-GTA-V-Evening-BG-6.jpg",
            "./images/gta-v-photo-manipulation/XSS-GTA-V-Colorful-Night-BG.jpg",
            "./images/gta-v-photo-manipulation/XSS-GTA-V-Xmas-BG.jpg",
            "./images/gta-v-photo-manipulation/XSS-GTA-V-Autumn-BG.jpg",
            "./images/gta-v-photo-manipulation/XSS-BG-GTA-V-2.jpg",
            "./images/gta-v-photo-manipulation/XSS-BG-GTA-V.jpg"
        ];

        openLightbox(imageSrcArray);
    });

    // Attach click event listener to the close button
    closeButton.addEventListener("click", closeLightbox);

    // Close the lightbox when clicking outside of the image
    window.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Close the lightbox when pressing the Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });
});