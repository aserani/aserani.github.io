function includeHTML(id, file, callback){
  fetch(file)
    .then(r => r.text())
    .then(t => {
      document.getElementById(id).innerHTML = t;
      if (callback) callback();
    });
}

function setActiveMenu() {
  let currentPath = window.location.pathname;
  if (currentPath === "/" || currentPath === "") currentPath = "/index.html";

  document.querySelectorAll("#site-nav a").forEach(a => a.classList.remove("active"));
  document.querySelectorAll("#site-nav .dropbtn").forEach(b => b.classList.remove("active"));

  document.querySelectorAll("#site-nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("javascript:")) return;

    const linkPath = new URL(href, window.location.origin).pathname;

    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });

  document.querySelectorAll("#site-nav .dropdown").forEach(drop => {
    if (drop.querySelector("a.active")) {
      const btn = drop.querySelector(".dropbtn");
      if (btn) btn.classList.add("active");
    }
  });
}

includeHTML("site-nav", "/includes/nav.html", setActiveMenu);
includeHTML("site-sidebar", "/includes/sidebar.html");
includeHTML("site-footer", "/includes/footer.html");
