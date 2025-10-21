const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const successMsg = document.getElementById("success");

const errors = {
  name: document.getElementById("error-name"),
  email: document.getElementById("error-email"),
  subject: document.getElementById("error-subject"),
  message: document.getElementById("error-message"),
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  Object.values(errors).forEach((err) => (err.textContent = ""));
  successMsg.textContent = "";

  if (nameInput.value.trim() === "") {
    errors.name.textContent = "Full name is required";
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === "") {
    errors.email.textContent = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(emailInput.value)) {
    errors.email.textContent = "Enter a valid email address";
    isValid = false;
  }

  if (subjectInput.value.trim() === "") {
    errors.subject.textContent = "Subject is required";
    isValid = false;
  }

  if (messageInput.value.trim().length < 10) {
    errors.message.textContent = "Message must be at least 10 characters";
    isValid = false;
  }

  if (isValid) {
    successMsg.textContent = "✅ Your message has been sent successfully!";
    form.reset();
  }
});
