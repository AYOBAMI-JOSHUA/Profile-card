// contact.js - client-side validation and success handling

(function () {
  const form = document.getElementById("contact-form");
  const nameEl = document.getElementById("name");
  const emailEl = document.getElementById("email");
  const subjectEl = document.getElementById("subject");
  const messageEl = document.getElementById("message");

  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");
  const errorSubject = document.getElementById("error-subject");
  const errorMessage = document.getElementById("error-message");

  const successBox = document.getElementById("form-success");

  // simple email regex (reasonable for validation)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function clearErrors() {
    errorName.textContent = "";
    errorEmail.textContent = "";
    errorSubject.textContent = "";
    errorMessage.textContent = "";
  }

  function validate() {
    let valid = true;
    clearErrors();

    if (!nameEl.value.trim()) {
      errorName.textContent = "Full name is required.";
      nameEl.setAttribute("aria-invalid", "true");
      valid = false;
    } else {
      nameEl.removeAttribute("aria-invalid");
    }

    if (!emailEl.value.trim()) {
      errorEmail.textContent = "Email is required.";
      emailEl.setAttribute("aria-invalid", "true");
      valid = false;
    } else if (!emailRegex.test(emailEl.value.trim())) {
      errorEmail.textContent = "Please enter a valid email (name@example.com).";
      emailEl.setAttribute("aria-invalid", "true");
      valid = false;
    } else {
      emailEl.removeAttribute("aria-invalid");
    }

    if (!subjectEl.value.trim()) {
      errorSubject.textContent = "Subject is required.";
      subjectEl.setAttribute("aria-invalid", "true");
      valid = false;
    } else {
      subjectEl.removeAttribute("aria-invalid");
    }

    if (!messageEl.value.trim()) {
      errorMessage.textContent = "Message is required.";
      messageEl.setAttribute("aria-invalid", "true");
      valid = false;
    } else if (messageEl.value.trim().length < 10) {
      errorMessage.textContent = "Message must be at least 10 characters.";
      messageEl.setAttribute("aria-invalid", "true");
      valid = false;
    } else {
      messageEl.removeAttribute("aria-invalid");
    }

    return valid;
  }

  // clear individual error when user types
  [nameEl, emailEl, subjectEl, messageEl].forEach((el) => {
    el.addEventListener("input", () => {
      const id = el.id;
      const err = document.getElementById("error-" + id);
      if (err) err.textContent = "";
      el.removeAttribute("aria-invalid");
      successBox.hidden = true;
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // hide previous success
    successBox.hidden = true;

    const ok = validate();

    if (!ok) {
      // focus first invalid field
      const firstInvalid = form.querySelector("[aria-invalid='true']");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // --- Simulate successful submission (you can replace with fetch) ---
    successBox.hidden = false;
    // Optionally reset form (keep commented if you want to preserve values)
    form.reset();

    // move focus to success message for screen readers
    successBox.focus?.();
  });
})();
