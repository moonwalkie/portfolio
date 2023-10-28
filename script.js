window.onscroll = function() {stickyNav()};

let navbar = document.querySelector('.container-nav');

// Sticky Navbar on the top
function stickyNav() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.cssText = "height: 3.2rem;";
  } else {
    navbar.style.cssText = "height: 4rem;";
  }
}

// Typewriter effect when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const h1 = document.getElementById("typewriter");
  const text = [
    "Hi! I'm Rafael",
    "Welcome to my portfolio."
  ];
  const delay = 100; // Adjust the delay between letters
  const initialDelay = 500; // Initial delay before starting the typewriter effect

  let lineIndex = 0;
  let charIndex = 0;

  function typeLetter() {
    if (lineIndex < text.length) {
      const line = text[lineIndex];
      if (charIndex < line.length) {
        if (line.charAt(charIndex) === '\n') {
          h1.innerHTML += "<br>";
        } else {
          h1.innerHTML += line.charAt(charIndex);
        }
        charIndex++;
        setTimeout(typeLetter, delay);
      } else {
        lineIndex++;
        charIndex = 0;
        h1.innerHTML += "<br>"; // Add line break between lines of text
        setTimeout(typeLetter, delay);
      }
    }
  }

  // Delay the start of the typewriter effect by 1 second
  setTimeout(function () {
    typeLetter();
  }, initialDelay);

  // Theme toggle
  const themeToggle = document.querySelector(".theme");
  const sun = themeToggle.querySelector(".sun");
  const moon = themeToggle.querySelector(".moon");
  const main = document.querySelector(".main");
  const navbar = document.querySelector(".navbar");
  const info = document.querySelector(".info");
  const aboutMeImg = document.querySelector(".about-me-img");
  const hr = document.querySelector("hr");
  const lightbox = document.querySelector(".lightbox-content");
  const navLinks = document.querySelector(".nav-links");

  let isMoonClicked = false;

  // Function to switch the theme
  function switchTheme() {
  if (isMoonClicked) {
    // Light Mode
    main.style.background = "linear-gradient(#c2c2c2, #e3e3e3, #c2c2c2)";
    navbar.style.cssText = "background-color: #c2c2c2; box-shadow: 0 0 0.5rem #757575";
    info.style.background = "linear-gradient(#e3e3e3, #c2c2c2)";
    aboutMeImg.style.cssText = "box-shadow: 3rem 3rem 3rem #bababa";
    hr.style.cssText = "background: -webkit-gradient(linear, 0 0, 100% 0, from(transparent), to(transparent), color-stop(50%, #858e9e))";
    h1.style.color = "#858e9e";
    lightbox.style.background = "#c2c2c2";
    navLinks.classList.add("light-mode-color");
    navLinks.classList.add("light-mode-shadow");
    moon.style.opacity = 0;
    sun.style.opacity = 1;
  } else {
    // Dark Mode
    main.style.background = "linear-gradient(#0d0d0e, #18181a, #0d0d0e)";
    navbar.style.cssText = "background-color: #141518; box-shadow: 0 0 0.5rem #0c0c0e";
    info.style.background = "linear-gradient(#141518, #0b0c0e)";
    aboutMeImg.style.cssText = "box-shadow: 3rem 3rem 3rem #0b0c0e";
    hr.style.cssText = "background: -webkit-gradient(linear, 0 0, 100% 0, from(transparent), to(transparent), color-stop(50%, #f5f0dc))";
    h1.style.color = "#f5f0dc";
    lightbox.style.background = "#141518";
    navLinks.classList.remove("light-mode-color");
    navLinks.classList.remove("light-mode-shadow");
    moon.style.opacity = 1;
    sun.style.opacity = 0;
  }
  }

  // Apply initial theme
  switchTheme();

  // Toggle the theme on click
  themeToggle.addEventListener("click", function () {
  isMoonClicked = !isMoonClicked;
  switchTheme();
  });
});

// Toggle the hamburger menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});

// Close the menu when a link is clicked
const navLinksList = document.querySelectorAll('.nav-links a');
navLinksList.forEach(function (link) {
  link.addEventListener('click', function () {
      navLinks.classList.remove('show');
      menuToggle.classList.remove('menu-open');
  });
});

function toggleMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  menuToggle.classList.toggle("menu-open");
}

document.addEventListener("click", function (event) {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const isClickInsideMenu = menuToggle.contains(event.target) || navLinks.contains(event.target);
  const isMenuOpen = navLinks.classList.contains("show");

  if (!isClickInsideMenu && isMenuOpen) {
    navLinks.classList.remove("show");
    menuToggle.classList.remove("menu-open");
  }
});