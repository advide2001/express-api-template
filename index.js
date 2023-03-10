const navElement = document.querySelector(".primary-navigation");
const navToggleButton = document.querySelector(".mobile-nav-toggle");

navToggleButton.addEventListener("click", () => {
  const visible = navElement.getAttribute("data-visible");
  if (visible === "true") {
    navElement.setAttribute("data-visible", "false");
    navToggleButton.style.backgroundImage =
      "url(../../images/shared/icon-hamburger.svg)";
    navToggleButton.setAttribute("aria-expanded", false);
  } else {
    navElement.setAttribute("data-visible", "true");
    navToggleButton.style.backgroundImage =
      "url(../../images/shared/icon-close.svg)";
    navToggleButton.setAttribute("aria-expanded", true);
  }
});
