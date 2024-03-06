// script.js

function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const eyeOpen = passwordInput.parentElement.querySelector(".eyeOpen");
    const eyeClose = passwordInput.parentElement.querySelector(".eyeClose");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeOpen.style.display = "none";
      eyeClose.style.display = "block";
    } else {
      passwordInput.type = "password";
      eyeOpen.style.display = "block";
      eyeClose.style.display = "none";
    }
  }
  
  document.querySelector('.signupbtn button').addEventListener('click', function (event) {
    const username = document.getElementById('S_username').value.trim();
    const email = document.getElementById('S_email').value.trim();
    const password = document.getElementById('S_pass').value;
    const confirmPassword = document.getElementById('S_cpass').value;
  
    document.querySelectorAll('.errors').forEach(error => error.textContent = '');
  
    let isValid = true;
  
    if (username === '') {
      document.getElementById('username-error').textContent = 'Username is required';
      isValid = false;
    }
  
    if (email === '') {
      document.getElementById('email-error').textContent = 'Email is required';
      isValid = false;
    }
  
    if (password === '') {
      document.getElementById('password-error').textContent = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById('password-error').textContent = 'Password must be at least 6 characters';
      isValid = false;
    }
  
    if (confirmPassword === '') {
      document.getElementById('confirm-password-error').textContent = 'Please confirm your password';
      isValid = false;
    } else if (password !== confirmPassword) {
      document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
      isValid = false;
    }
  
    if (!isValid) {
      event.preventDefault(); // Prevent form submission if there are errors
    }
  });
  