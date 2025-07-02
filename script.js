document.addEventListener('DOMContentLoaded', function() {
    // Lógica para el menú hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Cerrar el menú si se hace clic en un enlace (para navegación interna)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }

    // Lógica para expandir/colapsar detalles de aventura
    const expandButtons = document.querySelectorAll('.expand-button');

    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const detailsContainer = this.previousElementSibling; // El div.adventure-details está justo antes del botón
            if (detailsContainer && detailsContainer.classList.contains('adventure-details')) {
                detailsContainer.classList.toggle('active'); // Alternar la clase 'active'

                // Cambiar el texto y el icono del botón
                const icon = this.querySelector('i');
                if (detailsContainer.classList.contains('active')) {
                    this.innerHTML = 'Ver Menos <i class="fas fa-chevron-up"></i>';
                    if (icon) icon.className = 'fas fa-chevron-up';
                } else {
                    this.innerHTML = 'Ver Plan Completo <i class="fas fa-chevron-down"></i>';
                    if (icon) icon.className = 'fas fa-chevron-down';
                }
            }
        });
    });
});
