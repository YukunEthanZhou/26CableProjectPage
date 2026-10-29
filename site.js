// Opens and closes the section drawer on narrow screens (on wide screens the nav is a plain sidebar).
(function () {
  var root = document.documentElement;
  var nav = document.getElementById("site-nav");
  var menu = document.querySelector(".site-bar__menu");
  var close = document.querySelector(".site-nav__close");
  var scrim = document.querySelector(".site-scrim");
  if (!nav || !menu) {
    return;
  }

  function setOpen(open) {
    if (open) {
      root.classList.add("nav-open");
    } else {
      root.classList.remove("nav-open");
    }
    menu.setAttribute("aria-expanded", open ? "true" : "false");
  }

  menu.addEventListener("click", function () {
    setOpen(true);
    (nav.querySelector('[aria-current="page"]') || nav.querySelector("a")).focus();
  });

  close.addEventListener("click", function () {
    setOpen(false);
    menu.focus();
  });

  scrim.addEventListener("click", function () {
    setOpen(false);
  });

  // a link to a section of the open page only scrolls, so close the drawer to show it
  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && root.classList.contains("nav-open")) {
      setOpen(false);
      menu.focus();
    }
  });
})();
