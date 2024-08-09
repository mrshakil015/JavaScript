// Step-1: Add click event handler with the submit button
document.getElementById("submit-btn").addEventListener("click", function () {
  // Step-2: get email
  const emailField = document.getElementById("useremail");
  const userEmail = emailField.value;

  // Step-3: get password
  const passwordField = document.getElementById("userpassword");
  const userPassword = passwordField.value;

  // Step-4: verify email and password
  if(userEmail=== 'bank@gmail.com' && userPassword === 'bank'){
    window.location.href = 'bank.html';
  }
  else{
    alert('Invalid Email & Password');
  }
});
