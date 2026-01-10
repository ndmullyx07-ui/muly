const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => fadeObserver.observe(el));

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("navMenu");

  if (!burger || !navMenu) return;

  burger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // AUTO TUTUP SAAT PINDAH HALAMAN
  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
});
