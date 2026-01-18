function includeHTML(id, file, callback) {
  fetch(file)
    .then(r => r.text())
    .then(t => {
      const el = document.getElementById(id);
      if (!el) return;
      el.innerHTML = t;
      if (callback) callback();
    });
}

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

  // pulizia
  document.querySelectorAll("#site-nav a").forEach(a => a.classList.remove("active"));
  document.querySelectorAll("#site-nav .dropbtn").forEach(b => b.classList.remove("active"));

  // marca attivo il link che matcha la pagina
  document.querySelectorAll("#site-nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    const linkPath = new URL(href, window.location.origin).pathname;
    if (linkPath === currentPath) link.classList.add("active");
  });

  // se un link dentro un dropdown è attivo, attiva anche il bottone del dropdown
  document.querySelectorAll("#site-nav .dropdown").forEach(drop => {
    if (drop.querySelector("a.active")) {
      const btn = drop.querySelector(".dropbtn");
      if (btn) btn.classList.add("active");
    }
  });
}

includeHTML("site-nav", "/includes/nav.html", setActiveMenu);
includeHTML("site-sidebar", "/includes/sidebar.html");

includeHTML("site-footer", "/includes/footer.html", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});

