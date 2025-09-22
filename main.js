
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Scroll Reveal

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text', { delay: 200, origin: 'top'})
sr.reveal('.form-container form', { delay: 400, origin: 'left'})
sr.reveal('.heading', { delay: 400, origin: 'top'})
sr.reveal('.ride-container .box', { delay: 200, origin: 'top'})
sr.reveal('.services-container .box', { delay: 200, origin: 'top'})
sr.reveal('.about-container', { delay: 200, origin: 'top'})
sr.reveal('.reviews-container', { delay: 200, origin: 'top'})
sr.reveal('.newsletter .box', { delay: 400, origin: 'bottom'})

// Ejemplo: mostrar un alert al dar clic en algún servicio
document.querySelectorAll(".categoria ul li").forEach(item => {
  item.addEventListener("click", () => {
    alert("Seleccionaste: " + item.textContent.trim());
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".categoria-btn");

  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const categoria = btn.parentElement; // el div.categoria
      categoria.classList.toggle("open");

      // Rotar flecha
      const icono = btn.querySelector("i");
      icono.classList.toggle("rotado");
    });
  });
});


