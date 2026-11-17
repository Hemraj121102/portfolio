const form = document.querySelector("#contactForm");
const successMsg = document.querySelector("#successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  successMsg.textContent = "Your message has been submitted successfully!";
  successMsg.style.color = "green";

  form.reset();
});