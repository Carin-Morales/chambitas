const toggleBtn = document.getElementById("ch-navbar-toggle");
const navLinks = document.getElementById("ch-navbar-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
