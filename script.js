// Smooth scrolling for anchor links
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

// Age calculation based on birth date
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
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close-btn');

// Open modal when a project card is clicked
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        modal.style.display = 'block';
        // You can also populate the modal with specific project details here if needed
    });
});

// Close modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
