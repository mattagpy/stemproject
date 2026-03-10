const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const yearEl = $("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const progressBar = $("#progressBar");
if (progressBar){
  window.addEventListener("scroll", () => {
    const doc = document.documentElement;
    const height = doc.scrollHeight - doc.clientHeight;
    const progress = height > 0 ? (doc.scrollTop / height) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  });
}

const current = document.body.getAttribute("data-page");
$$(".nav__link").forEach(link => {
  if (link.getAttribute("data-link") === current){
    link.classList.add("active");
  }
});

const revealEls = $$(".reveal");
if (revealEls.length){
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObs.observe(el));
}
