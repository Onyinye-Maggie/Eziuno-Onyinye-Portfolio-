document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const themeToggle = document.getElementById("themeToggle");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "🌙";
    }
  });
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});
const demoBtns = document.querySelectorAll(".live-demo-btn");
demoBtns.forEach(btn => {
  const target = document.getElementById(btn.dataset.target);
  
  btn.addEventListener("click", () => {
    target.style.display = "flex";
  });
});

const closeBtns = document.querySelectorAll(".close-btn");
closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.style.display = "none";
  });
});
window.addEventListener("click", (e) => {
  const modal = document.querySelector(".modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
});
