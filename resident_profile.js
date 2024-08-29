document.addEventListener('DOMContentLoaded', () => {
    // Retrieve data from localStorage
    const guestData = JSON.parse(localStorage.getItem('guestData'));

    if (guestData) {
        // Populate profile with guest data
        document.getElementById('guest-name').textContent = guestData.incomerName;
        document.getElementById('guest-phone').textContent = guestData.phoneNumber;
        document.getElementById('visit-purpose').textContent = guestData.purposeOfVisit;
        document.getElementById('visit-time').textContent = guestData.timeOfVisit;
        document.getElementById('visit-date').textContent = guestData.dateOfVisit;
    } else {
        // Handle the case where no data is found
        document.getElementById('guest-profile').innerHTML = '<p>No guest data found.</p>';
    }
});

