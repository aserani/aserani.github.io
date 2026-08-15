(function () {
  const header = document.querySelector("[data-site-header]");
  const toggle = document.querySelector(".nav-toggle");
  const navigation = document.querySelector("#primary-navigation");

  if (header && toggle && navigation) {
    toggle.addEventListener("click", function () {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      header.classList.toggle("nav-open", !isOpen);
    });

    navigation.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        header.classList.remove("nav-open");
      }
    });
  }

  const currentPath = window.location.pathname.replace(/index\.html$/, "");
  const sectionPaths = {
    "/html/articles.html": "/html/publications.html",
    "/html/chapters.html": "/html/publications.html",
    "/html/proceedings.html": "/html/publications.html",
    "/html/researchers.html": "/html/mentoring.html",
    "/html/students.html": "/html/mentoring.html",
    "/html/work.html": "/html/experience.html",
    "/html/education.html": "/html/experience.html",
    "/html/software.html": "/html/research.html",
    "/html/national.html": "/html/projects.html"
  };
  const activePath = sectionPaths[currentPath] || currentPath;
  document.querySelectorAll(".primary-nav a").forEach(function (link) {
    const linkPath = new URL(link.href, window.location.origin).pathname.replace(/index\.html$/, "");
    if (linkPath === activePath) {
      link.setAttribute("aria-current", "page");
    }
  });

  const publicationNumbers = Array.from(document.querySelectorAll(".cp-num"));
  publicationNumbers.forEach(function (element, index) {
    element.textContent = "[" + (publicationNumbers.length - index) + "] ";
  });
})();
