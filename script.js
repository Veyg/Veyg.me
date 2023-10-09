// === SMOOTH SCROLLING ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});

// === AGE CALCULATION ===
document.addEventListener("DOMContentLoaded", function() {
  const birthDate = new Date("1998-12-19");
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear() - 
              (currentDate.getMonth() < birthDate.getMonth() || 
              (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate()) ? 1 : 0);
  const ageElement = document.getElementById("age");
  if (ageElement) {
      ageElement.textContent = age;
  }
});

// === MODAL FUNCTIONALITY ===
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
      modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
      modal.style.display = 'none';
  }
});
