// Set the target date for when the construction is expected to be completed
const targetDate = new Date('2023-10-01T00:00:00');

// Function to update the countdown timer
function updateCountdown() {
  const now = new Date();
  const timeRemaining = targetDate - now;

  if (timeRemaining > 0) {
    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / 1000 / 60 / 60) % 24);

    document.getElementById('countdown').textContent =
      `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  } else {
    document.getElementById('countdown').textContent = 'Construction Completed!';
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to set the countdown immediately
updateCountdown();
