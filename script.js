const form = document.getElementById('signup-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const role = document.getElementById('role').value;

    // Validate form data
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    const userData = {
        username,
        email,
        password,
        role
    };

    // Store data in local storage
    if (role === 'resident') {
        saveDataToLocalStorage('residents', userData);
        window.location.href = 'resident_signup.html';
    } else if (role === 'vendor') {
        saveDataToLocalStorage('vendors', userData);
        window.location.href = 'vendor_signup.html';
    } else if (role === 'admin') {
        saveDataToLocalStorage('admins', userData);
        window.location.href = 'admin_signup.html';
    }
});

const residentForm = document.getElementById('resident-form');
const vendorForm = document.getElementById('vendor-form');
const adminForm = document.getElementById('admin-form');

residentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const flatNumber = document.getElementById('flat-number').value;
    const towerNumber = document.getElementById('tower-number').value;
    const society = document.getElementById('society').value;

    // Validate form data
    if (!flatNumber || !towerNumber || !society) {
        alert('Please fill in all the required fields');
        return;
    }

    const residentData = {
        flatNumber,
        towerNumber,
        society
    };

    // Store resident data in local storage
    saveDataToLocalStorage('residents', residentData);
    window.location.href = 'resident_confirmation.html';
});

vendorForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const shopAddress = document.getElementById('shop-address').value;
    const category = document.getElementById('category').value;

    // Validate form data
    if (!shopAddress || !category) {
        alert('Please fill in all the required fields');
        return;
    }

    const vendorData = {
        shopAddress,
        category
    };

    // Store vendor data in local storage
    saveDataToLocalStorage('vendors', vendorData);
    window.location.href = 'vendor_confirmation.html';
});

adminForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const incomerName = document.getElementById('incomer-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const purposeOfVisit = document.getElementById('purpose-of-visit').value;

    // Validate form data
    if (!incomerName || !phoneNumber || !purposeOfVisit) {
        alert('Please fill in all the required fields');
        return;
    }

    const adminData = {
        incomerName,
        phoneNumber,
        purposeOfVisit
    };

    // Store admin data in local storage
    saveDataToLocalStorage('admins', adminData);
    window.location.href = 'admin_confirmation.html';
});

// Function to save data to local storage
function saveDataToLocalStorage(key, data) {
    let storedData = JSON.parse(localStorage.getItem(key)) || [];
    storedData.push(data);
    localStorage.setItem(key, JSON.stringify(storedData));
}
