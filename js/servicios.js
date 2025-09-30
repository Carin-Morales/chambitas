// Navbar toggle
const toggleBtn = document.getElementById("ch-navbar-toggle");
const navLinks = document.getElementById("ch-navbar-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Tabs
const tabs = document.querySelectorAll(".ch-tab");
const tabContents = document.querySelectorAll(".ch-tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // quitar "active" a todos
    tabs.forEach(t => t.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // activar el actual
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
