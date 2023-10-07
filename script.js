window.onscroll = function() {stickyNav()};

let navbar = document.querySelector('.navbar');

function stickyNav() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.cssText = "height: 3.2rem;";
  } else {
    navbar.style.cssText = "height: 4rem;";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const h1 = document.getElementById("typewriter");
  const text = [
    "Hi! I'm Rafael",
    "Welcome to my portfolio."
  ];
  const delay = 100; // Adjust the delay between letters

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

  typeLetter();
});