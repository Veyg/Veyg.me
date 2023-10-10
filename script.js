
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

// AOS initialization
AOS.init();

// tsParticles configuration
tsParticles.load('tsparticles', {
  particles: {
      number: {
          value: 100
      },
      size: {
          value: 1
      },
      twinkle: {
          particles: {
              enable: true,
              frequency: 0.05
          }
      }
  },
  interactivity: {
      events: {
          onhover: {
              enable: true,
              mode: "bubble"
          }
      },
      modes: {
          bubble: {
              size: 10,
              distance: 40
          }
      }
  }
});
// Get the back-to-home button
const backToHomeButton = document.querySelector('.back-to-home');

// Add a scroll event listener
window.addEventListener('scroll', () => {
    // Get the height of the document
    const totalDocumentHeight = document.documentElement.scrollHeight;

    // Get the combined height of the window and the current scroll position
    const scrollPosition = window.innerHeight + window.scrollY;

    // If we're within 300px of the bottom of the page, hide the button
    if (scrollPosition > totalDocumentHeight - 300) {
        backToHomeButton.style.opacity = '0';
    } else {
        backToHomeButton.style.opacity = '1';
    }
});
$(document).ready(function() {
    $('body').css('opacity', 1);
});
