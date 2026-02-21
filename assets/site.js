// hamburger menu (usa #myTopnav dentro nav.html)
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (!x) return;
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// active menu + highlight del dropdown padre
function setActiveMenu() {
  let currentPath = window.location.pathname;
  if (currentPath === "/" || currentPath === "") currentPath = "/index.html";

  document.querySelectorAll("#site-nav a").forEach(a => a.classList.remove("active"));
  document.querySelectorAll("#site-nav .dropbtn").forEach(b => b.classList.remove("active"));

  document.querySelectorAll("#site-nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    const linkPath = new URL(href, window.location.origin).pathname;
    if (linkPath === currentPath) link.classList.add("active");
  });

  document.querySelectorAll("#site-nav .dropdown").forEach(drop => {
    if (drop.querySelector("a.active")) {
      const btn = drop.querySelector(".dropbtn");
      if (btn) btn.classList.add("active");
    }
  });
}


function renumberPublicationsOldestIsOne() {
  const nums = Array.from(document.querySelectorAll(".cp-num"));
  const n = nums.length;
  if (!n) return;

  // Se la lista nel file è newest-first (come la tua), allora:
  // primo elemento visualizzato = più recente -> deve avere [n]
  // ultimo elemento visualizzato = più vecchio -> deve avere [1]
  nums.forEach((el, i) => {
    const k = n - i;          // reverse numbering
    el.textContent = `[${k}] `;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // ... le tue altre init (setActiveMenu, ecc.)
  setActiveMenu();
  renumberPublicationsOldestIsOne();
});
