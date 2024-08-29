// JavaScript for the Sign Up page

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get form data
    const fullName = document.getElementById("fullName").value;
    const emailAddress = document.getElementById("emailAddress").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    // Validate form data
    if (fullName === "" || emailAddress === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
  }
  
  document.getElementById("signupForm").addEventListener("submit", handleFormSubmit);