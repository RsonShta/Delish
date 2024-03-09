// Function to toggle password visibility
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

// Event listener for password visibility toggle
document.querySelectorAll('.eyeToggle').forEach(icon => {
  icon.addEventListener('click', function() {
      const inputId = this.dataset.target;
      togglePasswordVisibility(inputId);
  });
});
