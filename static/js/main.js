document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu and Navbar Scroll Effect
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
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2. Interactive WhatsApp Pre-filled Message Generator (BEST CONVERSION PRACTICE)
  const condoInput = document.getElementById("wa-condo-name");
  const unitsInput = document.getElementById("wa-condo-units");
  const whatsappCta = document.getElementById("wa-hero-cta");

  const basePhoneNumber = "525545309857";

  function updateWhatsAppLink() {
    let condoName = condoInput ? condoInput.value.trim() : "";
    let unitsText = unitsInput ? unitsInput.value.trim() : "";
    
    // Build smart textual variables for the WhatsApp chat
    let message = "Hola GICondo! 👋 Me interesa solicitar una cotización y conocer más sobre sus servicios de administración.";
    
    if (condoName !== "" || unitsText !== "") {
      message += " Aquí están algunos datos de mi comunidad:\n";
      if (condoName !== "") message += `🏢 Condominio: ${condoName}\n`;
      if (unitsText !== "") message += `🔢 Departamentos/Casas: ${unitsText}`;
    }
    
    // Encode properly for URI parameters
    let encodedMessage = encodeURIComponent(message);
    whatsappCta.setAttribute("href", `https://wa.me/${basePhoneNumber}?text=${encodedMessage}`);
  }

  if (condoInput && unitsInput && whatsappCta) {
    condoInput.addEventListener("input", updateWhatsAppLink);
    unitsInput.addEventListener("input", updateWhatsAppLink);
  }

  // 3. Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") === "#") return;
      e.preventDefault();

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

  // 4. Intersection Observer for Smooth On-Scroll Cascade Animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.12,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in-up").forEach(el => observer.observe(el));

  const staggerItems1 = document.querySelectorAll(".stagger-item");
  staggerItems1.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.12}s`;
    observer.observe(el);
  });

  const staggerItems2 = document.querySelectorAll(".stagger-item-2");
  staggerItems2.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.08}s`;
    observer.observe(el);
  });
});
