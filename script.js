window.onscroll = function() {stickyNav()};

let navbar = document.querySelector(".navbar");

function stickyNav() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.cssText = "height: 3.2rem;";
  } else {
    navbar.style.cssText = "height: 4rem;";
  }
}