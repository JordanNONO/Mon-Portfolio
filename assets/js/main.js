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
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Developer", "Designer", "Data Analyst", "Analyst"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })


/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 })

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    } else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

function linkToSendMail({ name, email, message }) {
  const phone = "07 45 68 12 19";
  const linkValue = `mailto:nononoj@3il.fr?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nEmail: ' + email + '\nTéléphone: ' + phone)}`;
  window.location.href = linkValue;
}

// Amélioration de la validation du formulaire et du mailto
const formsToValidate = document.querySelectorAll('form[validate]');
formsToValidate.forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;
    const data = {};
    const inputs = [...form.querySelectorAll('input'), ...form.querySelectorAll("select"), ...form.querySelectorAll("textarea")];
    inputs.forEach(input => {
      if (input.value.trim() === "") {
        input.style.borderColor = "red";
        valid = false;
      } else {
        input.style.borderColor = "gray";
        data[input.name ?? input.id] = input.value.trim();
      }
    });
    if (!valid) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    // Envoi du mail
    window.location.href = `mailto:nononoj@3il.fr?subject=${encodeURIComponent(data.name)}&body=${encodeURIComponent(data.message + '\n\nEmail: ' + data.email)}`;
    form.reset();
    alert("Message prêt à être envoyé via votre client mail.");
  });
});

// Accessibilité : fermer le menu mobile avec ESC
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className.includes("responsive")) {
      menuBtn.className = "nav-menu";
    }
  }
});