window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    const scrollPosition = window.scrollY;
  
    // Agrega o quita la clase "scroll" según el desplazamiento de la página
    if (scrollPosition > 0) {
        header.classList.remove("scroll");
    } else {
        header.classList.add("scroll");
    }
  });