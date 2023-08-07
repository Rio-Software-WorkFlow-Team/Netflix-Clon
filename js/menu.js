window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    const subNav = document.querySelector("#subNav");
    const scrollPosition = window.scrollY;
  
    // Agrega o quita la clase "scroll" según el desplazamiento de la página
    if (scrollPosition > 0) {
        nav.classList.add("scroll");
        subNav.classList.add("subScroll");
    } else {
        nav.classList.remove("scroll");
        subNav.classList.remove("subScroll");
    }
  });