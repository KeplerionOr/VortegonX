// Agregamos un evento para detectar cuando la ventana se desplaza
window.addEventListener('scroll', () => {
    // Obtenemos todas las secciones
    const sections = document.querySelectorAll('section');

    // Iteramos sobre cada sección
    sections.forEach(section => {
        // Calculamos la posición de la parte superior de la sección
        const sectionTop = section.getBoundingClientRect().top;

        // Si la parte superior de la sección está en el rango visible de la ventana
        if (sectionTop < window.innerHeight * 0.8) {
            // Agregamos la clase 'section-enter' para aplicar la animación de entrada
            section.classList.add('section-enter');
        }
    });
});