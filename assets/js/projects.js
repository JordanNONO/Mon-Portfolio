/* ----- PROJECTS CATEGORY FILTER ----- */
const filterButtons = document.querySelectorAll('.project-filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    filterButtons.forEach(function (b) { b.classList.remove('active'); });
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    projectCards.forEach(function (card) {
      const match = filter === 'all' || card.getAttribute('data-category') === filter;
      card.style.display = match ? '' : 'none';
    });
  });
});
