function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var typed = new Typed(".typed_text", {
  strings: ["Software Developer", "Cybersecurity Engineer", "Security Analyst", "DevSecOps Engineer"],
  typeSpeed: 50,
  backSpeed: 80,
  loop: true
});
