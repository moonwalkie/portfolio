document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImagesContainer = document.getElementById(
    "lightbox-images-container"
  );
  const closeButton = document.getElementById("close");

  // Array of title texts
  const titleArray = [
    "PHOTO MANIPULATION",
    "LANDSCAPE ILLUSTRATIONS",
    "LOGOS",
    "ILLUSTRATIONS",
    "JUNGLE LANDSCAPE SERIES",
    "ICONS",
    "BACKGROUNDS",
    "VECTOR PORTRAITS",
    "FORUM SIGNATURES",
  ];

  // Function to open the lightbox with an array of image sources
  function openLightbox(imageSrcArray, title) {
    // Clear the existing content in the lightbox
    lightboxImagesContainer.innerHTML = "";

    // Create a title element and set its text
    const titleElement = document.createElement("div");
    titleElement.classList.add("lightbox-title");
    titleElement.textContent = title;

    // Append the title to the lightbox
    lightboxImagesContainer.appendChild(titleElement);

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
      "./images/photo-manipulation/XSS-GTA-V-Ocean-BG.jpg",
      "./images/photo-manipulation/XSS-GTA-V-Evening-BG-7.jpg",
      "./images/photo-manipulation/XSS-GTA-V-Evening-BG-6.jpg",
      "./images/photo-manipulation/XSS-GTA-V-Colorful-Night-BG.jpg",
      "./images/photo-manipulation/XSS-GTA-V-Xmas-BG.jpg",
      "./images/photo-manipulation/XSS-GTA-V-Autumn-BG.jpg",
      "./images/photo-manipulation/XSS-BG-GTA-V-2.jpg",
      "./images/photo-manipulation/XSS-BG-GTA-V.jpg",
    ];

    const title = titleArray[0];
    openLightbox(imageSrcArray, title);
  });

  const box2 = document.querySelector(".box.two");

  box2.addEventListener("click", function () {
    const imageSrcArray = [
      "./images/landscape-illustrations/AUSTRALIAN-WILDLIFE.png",
      "./images/landscape-illustrations/MOUNTAINOUS.png",
      "./images/landscape-illustrations/EARLY-RISER.png",
      "./images/landscape-illustrations/WANDERING-ON-A-LOST-ISLAND.png",
      "./images/landscape-illustrations/FRESH-AIR.png",
    ];

    const title = titleArray[1];
    openLightbox(imageSrcArray, title);
  });

  const box3 = document.querySelector(".box.three");

  box3.addEventListener("click", function () {
    const imageSrcArray = [
      "./images/logos/Mona's-Beauty-LOGO-WEB-White.png",
      "./images/logos/BESTPIESA-logo-final.png",
      "./images/logos/BMWPARTS-logo-final.png",
      "./images/logos/JAPANPARTS-logo-final.png",
      "./images/logos/XSS-Logo.png",
      "./images/logos/WEIMO-PROD-XSS-TV-2.png",
      "./images/logos/WEIMO-PROD-XSS-TV.png",
    ];

    const title = titleArray[2];
    openLightbox(imageSrcArray, title);
  });

  const box4 = document.querySelector(".box.four");

  box4.addEventListener("click", function () {
    const imageSrcArray = [
      "./images/illustrations/Lollipop-Lick-Artwork.png",
      "./images/illustrations/Apple-Background.png",
      "./images/illustrations/Red-Apple-Background.png",
    ];

    const title = titleArray[3];
    openLightbox(imageSrcArray, title);
  });

  const box5 = document.querySelector(".box.five");

  box5.addEventListener("click", function () {
    const imageSrcArray = [
      "./images/jungle-landscape-series/ADAM-AND-EVE.png",
      "./images/jungle-landscape-series/God's-Acre-Landscape-Background-by-Moon.png",
      "./images/jungle-landscape-series/WINTER-SEASON.png",
      "./images/jungle-landscape-series/Dark-Jungle-Landscape-Background-by-Moon.png",
      "./images/jungle-landscape-series/Jungle-Landscape-Background-by-Moon.png",
    ];

    const title = titleArray[4];
    openLightbox(imageSrcArray, title);
  });

  const box6 = document.querySelector(".box.six");

  box6.addEventListener("click", function () {
    const imageSrcArray = [
      "./images/icons/XSS-ICONS-PREVIEW.png",
      "./images/icons/XSS-RANKS-PREVIEW.png",
    ];

    const title = titleArray[5];
    openLightbox(imageSrcArray, title);
  });

  const box7 = document.querySelector(".box.seven");

  box7.addEventListener("click", function () {
    const imageSrcArray = [
      "./images/backgrounds/MOON-Gioconda.png",
      "./images/backgrounds/MoonWalk-KING-LION-Background.jpg",
      "./images/backgrounds/MoonWalk-KING-LION&SANTA-Background.png",
      "./images/backgrounds/Windows-Background-by-Moon.png",
      "./images/backgrounds/Pawn-Piece-Background-by-Moon.png",
      "./images/backgrounds/Abstract-Polygon-Background-by-Moon.png",
    ];

    const title = titleArray[6];
    openLightbox(imageSrcArray, title);
  });

  const box8 = document.querySelector(".box.eight");

  box8.addEventListener("click", function () {
    const imageSrcArray = [
      "./images/vector-portraits/2Pac-Artwork.png",
      "./images/vector-portraits/Eminem-Artwork.png",
    ];

    const title = titleArray[7];
    openLightbox(imageSrcArray, title);
  });

  const box9 = document.querySelector(".box.nine");

  box9.addEventListener("click", function () {
    const imageSrcArray = [
      "./images/forum-signatures/MoonWalk-I'LL-BE-OKAY-Signature.png",
      "./images/forum-signatures/MoonWalk-LOGO-Signature.png",
      "./images/forum-signatures/MoonWalk-KING-LION-Signature.gif",
      "./images/forum-signatures/MoonWalk-Gioconda-Signature.png",
      "./images/forum-signatures/AQUARIUM-Signature.png",
    ];

    const title = titleArray[8];
    openLightbox(imageSrcArray, title);
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
