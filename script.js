document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".content-section");

  document.querySelectorAll(".project-button").forEach(link => {
    link.addEventListener("click", (e) => {
      // Allow navigation
      console.log(`Navigating to ${link.href}`);
    });
  });

  // Show only the Home section by default
  document.getElementById("home").classList.add("active");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      
      sections.forEach(section => section.classList.remove("active"));
      const sectionId = this.getAttribute("data-section");
      document.getElementById(sectionId).classList.add("active");
    });
  });
});

  // Form submission handling
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxxBTLsMKq3in6NVUOVJmYhHrj8PSk5A18iluLvhOPGONIu3ee2dyf1tz99NB-80TQsaw/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        msg.innerHTML = "Message sent Successfully!";
        setTimeout(function() {
          msg.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  });
}