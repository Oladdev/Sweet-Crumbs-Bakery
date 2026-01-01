const menu = document.querySelector(".mega-menu");
    const toggle = menu.querySelector("#mega-toggle");

    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      menu.classList.toggle("open");
    });

    // close when clicking outside
    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target)) menu.classList.remove("open");
    });