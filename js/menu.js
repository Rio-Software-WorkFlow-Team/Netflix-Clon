window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    const scrollPosition = window.scrollY;
  
    // Agrega o quita la clase "scroll" según el desplazamiento de la página
    if (scrollPosition > 0) {
        nav.classList.add("scroll");
    } else {
        nav.classList.remove("scroll");
    }
  });