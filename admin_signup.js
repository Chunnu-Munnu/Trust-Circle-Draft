document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('admin-form');
  form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Collect form data
      const guestData = {
          incomerName: document.getElementById('incomer-name').value,
          phoneNumber: document.getElementById('phone-number').value,
          purposeOfVisit: document.getElementById('purpose-of-visit').value,
          timeOfVisit: document.getElementById('time-of-visit').value,
          dateOfVisit: document.getElementById('date-of-visit').value
      };

      // Store data in localStorage
      localStorage.setItem('guestData', JSON.stringify(guestData));

      // Redirect to the resident profile page (replace 'resident_profile.html' with your actual file name)
      window.location.href = 'resident_profile.html';
  });
});
