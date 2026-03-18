/*
 * JavaScript for Northern Texas Lawn Co.
 * Handles mobile navigation toggling.
 */

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});