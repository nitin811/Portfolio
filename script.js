document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Simple client-side confirmation
  document.getElementById('formMessage').textContent = 'Thank you for contacting me!';
  // Optionally: send form data using fetch/ajax
});
