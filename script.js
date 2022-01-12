const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('hide');
});

const nameInput = document.querySelector('[name="name"]');
nameInput.addEventListener('invalid', () => {
   nameInput.setCustomValidity('Please enter a valid name.');
});
