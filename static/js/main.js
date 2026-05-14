document.addEventListener("DOMContentLoaded", () => {
  // 1. Menú responsivo (Hamburguesa) y Efecto Scroll en Navbar
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.getElementById("navbar");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2. Desplazamiento Suave (Smooth Scrolling)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Cerrar menú móvil al hacer clic
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      }

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // 3. Intersection Observer Refinado (Animaciones en cascada / stagger)
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar elementos estáticos
  document.querySelectorAll(".fade-in-up").forEach(el => observer.observe(el));

  // Observar elementos con cascada (stagger) para "Nosotros"
  const staggerItems1 = document.querySelectorAll(".stagger-item");
  staggerItems1.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(el);
  });

  // Observar elementos con cascada (stagger) para "Servicios"
  const staggerItems2 = document.querySelectorAll(".stagger-item-2");
  staggerItems2.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
  });
});
