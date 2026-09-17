/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () { headerShadow() };

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";

  }
}

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    const link = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
    if (!link) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add('active-link')
    } else {
      link.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/* ----- ACCESSIBILITE: FERMER LE MENU MOBILE AVEC ESC ----- */
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className.includes("responsive")) {
      menuBtn.className = "nav-menu";
    }
  }
});
