/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Chef de Projet IT", "Data Analyst", "Data Engineer", "Développeur Fullstack"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 500,
  reset: true
})

/* -- HOME -- */
sr.reveal('.hero-terminal', {})
sr.reveal('.neofetch-card', { delay: 200 })

/* -- FORMATION -- */
sr.reveal('.git-log-window', {})

/* -- SERVICES -- */
sr.reveal('.service-card', { interval: 150 })

/* -- PROJECT BOX -- */
sr.reveal('.project-stat', { interval: 150 })
/* .project-card est exclu : le filtrage dynamique (projects.js) affiche/masque
   les cartes via display, ce qui entre en conflit avec le reset de ScrollReveal
   et peut laisser des cartes visibles mais à opacité 0. */

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '40px',
  duration: 500,
  reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '40px',
  duration: 500,
  reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })
