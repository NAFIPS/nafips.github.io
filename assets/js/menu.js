/* Mobile navigation toggle — the only JavaScript on the site. */
(function () {
  "use strict";
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("primary-menu");
  if (!toggle || !menu) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    menu.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Close when a link is chosen.
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  // Close on Escape and return focus to the toggle.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  // Reset state when resizing up to desktop.
  var mq = window.matchMedia("(min-width: 861px)");
  (mq.addEventListener ? mq.addEventListener.bind(mq, "change") : mq.addListener.bind(mq))(function () {
    if (mq.matches) setOpen(false);
  });
})();
