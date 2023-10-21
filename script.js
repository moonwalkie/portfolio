window.onscroll = function() {stickyNav()};

let navbar = document.querySelector('.container-nav');
let logo = document.querySelector('.mw');
let logoHover = document.querySelector('.mw.hover');

// Sticky Navbar on the top
function stickyNav() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.cssText = "height: 3.2rem;";
    logo.style.cssText = "height: 2.5rem";
    logoHover.style.cssText = "height: 2.5rem"; // Adjust the navbar and the logo when scrolling
  } else {
    navbar.style.cssText = "height: 4rem;";
    logo.style.cssText = "height: 3rem";
    logoHover.style.cssText = "height: 3rem";
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