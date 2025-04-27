const TO_TOP = document.querySelector('.pageUp');
const HEADING_ARROW = document.querySelector('.heading__arrow');
const FOOTER_YEAR = document.querySelector('#year');

HEADING_ARROW.onclick = function () {
  window.scrollTo(0, window.innerHeight);
};

window.addEventListener('scroll', function () {
  if (window.scrollY > 1000) {
    TO_TOP.classList.remove('hidden');
  } else {
    TO_TOP.classList.add('hidden');
  }
});
TO_TOP.onclick = function () {
  window.scrollTo(0, 0);
};

FOOTER_YEAR.textContent = String(new Date().getFullYear());
