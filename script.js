document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be greater than 3");
    }

    if (!email.includes("@") || !email.includes(".")) {
      messages.push("Email must include @ or . character");
      isValid = false;
    }

    if (password.length < 8) {
      messages.push("Password must be greater than 8");
      isValid = false;
    }

    // Validate

    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    }

    if (!isValid) {
      let msg;
      messages.join() + "<br>";
      feedbackDiv.innerHTML = messages;
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
