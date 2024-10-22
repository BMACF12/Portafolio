// Función para activar las animaciones en servicios
function animateServices() {
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.classList.add('show'); // Añade la clase 'show' a cada ítem
    });
}

// Función para activar las animaciones en experiencia
function animateExperience() {
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        item.classList.add('show'); // Añade la clase 'show' a cada ítem
    });
}

// Función para activar las animaciones en habilidades
function animateSkills() {
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.classList.add('show'); // Añade la clase 'show' a cada ítem
    });
}

// Ejecutar las funciones cuando la página esté completamente cargada
window.addEventListener('load', () => {
    console.log('Página completamente cargada, ejecutando animaciones');
    animateServices();
    animateExperience();
    animateSkills(); // Añade esta línea para ejecutar la animación de habilidades
});
