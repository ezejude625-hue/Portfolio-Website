/* =============================================
   Eze Jude Portfolio — website.js
   ============================================= */

// ── AOS (Scroll animations) ──────────────────
AOS.init({
  duration: 800,
  once: true,
  easing: "ease-out-quart",
  offset: 60,
});

// ── Loader ───────────────────────────────────
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hidden");
    setTimeout(() => loader.remove(), 600);
  }, 2900);
});

// ── Sticky header ────────────────────────────
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

// ── Mobile nav toggle ─────────────────────────
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close nav when a link is clicked
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// ── Active nav link on scroll ─────────────────
const sections = document.querySelectorAll("section[id], .hero[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observerOptions = {
  rootMargin: "-40% 0px -55% 0px",
  threshold: 0,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`,
        );
      });
    }
  });
}, observerOptions);

sections.forEach((s) => sectionObserver.observe(s));

// ── Contact form ──────────────────────────────
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const submitBtn = document.getElementById("submit");
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';

  // Simulate send delay (replace with real fetch/AJAX)
  setTimeout(() => {
    successMessage.style.display = "flex";
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML =
      '<i class="fa-solid fa-paper-plane"></i> Send Message';

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 4000);
  }, 1200);
});

// ── Skill bar animation on scroll ────────────
const skillCards = document.querySelectorAll(".skill-card");
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 },
);
skillCards.forEach((card) => skillObserver.observe(card));

// ── Scroll-to-top button ──────────────────────
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ── Theme toggle ──────────────────────────────
const themeDarkBtn = document.getElementById("themeDark");
const themeSystemBtn = document.getElementById("themeSystem");
const themeLightBtn = document.getElementById("themeLight");
const root = document.documentElement;

function applyTheme(theme) {
  // Remove active from all
  [themeDarkBtn, themeSystemBtn, themeLightBtn].forEach((b) =>
    b.classList.remove("active"),
  );

  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
    themeDarkBtn.classList.add("active");
  } else if (theme === "light") {
    root.setAttribute("data-theme", "light");
    themeLightBtn.classList.add("active");
  } else {
    // System default
    root.removeAttribute("data-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (!prefersDark) root.setAttribute("data-theme", "light");
    themeSystemBtn.classList.add("active");
  }

  localStorage.setItem("theme", theme);
}

// Init on load
const savedTheme = localStorage.getItem("theme") || "system";
applyTheme(savedTheme);

themeDarkBtn.addEventListener("click", () => applyTheme("dark"));
themeSystemBtn.addEventListener("click", () => applyTheme("system"));
themeLightBtn.addEventListener("click", () => applyTheme("light"));

// Respond to OS preference changes when in system mode
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (
      localStorage.getItem("theme") === "system" ||
      !localStorage.getItem("theme")
    ) {
      applyTheme("system");
    }
  });
const swiper = new Swiper(".projects", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  speed: 600,
  effect: "slide",

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  keyboard: { enabled: true },

  breakpoints: {
    640: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 24 },
    1024: { slidesPerView: 3, spaceBetween: 28 },
  },
});
