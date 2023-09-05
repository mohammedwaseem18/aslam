function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('menu-open');
}

function scrollToSection(sectionId) {
  const section = document.querySelector(`#${sectionId}`);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}



// Event listeners for navigation links
document.querySelector('a[href="#home"]').addEventListener('click', function (event) {
  event.preventDefault();
  scrollToSection('home');
  toggleMenu(); // Close the menu after clicking
});

document.querySelector('a[href="#about"]').addEventListener('click', function (event) {
  event.preventDefault();
  scrollToSection('about');
  toggleMenu();
});

document.querySelector('a[href="#resume"]').addEventListener('click', function (event) {
  event.preventDefault();
  scrollToSection('resume');
  toggleMenu();
});

document.querySelector('a[href="#skills"]').addEventListener('click', function (event) {
  event.preventDefault();
  scrollToSection('skills');
  toggleMenu();
});

document.querySelector('a[href="#projects"]').addEventListener('click', function (event) {
  event.preventDefault();
  scrollToSection('projects');
  toggleMenu();
});

document.querySelector('a[href="#contact"]').addEventListener('click', function (event) {
  event.preventDefault();
  scrollToSection('contact');
  toggleMenu();
});
