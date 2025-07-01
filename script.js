document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Muestra u oculta el botón basado en el scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Muestra el botón si el usuario se desplaza más de 300px
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Desplaza la página suavemente hacia arriba al hacer clic
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});
