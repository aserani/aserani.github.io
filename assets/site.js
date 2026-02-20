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

document.addEventListener("DOMContentLoaded", () => {
  setActiveMenu();
});
