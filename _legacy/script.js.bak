// Función para mostrar/ocultar el menú de navegación en dispositivos móviles
document.getElementById('menu-toggle').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
});

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

// Función para activar las animaciones en íconos de tecnologías
function animateIcons() {
    const techIcons = document.querySelectorAll('.tech-icons i');
    techIcons.forEach(icon => {
        icon.classList.add('show'); // Añade la clase 'show' a cada ícono
    });
}

// Ejecutar las funciones cuando la página esté completamente cargada
window.addEventListener('load', () => {
    console.log('Página completamente cargada, ejecutando animaciones');
    animateServices();
    animateExperience();
    animateSkills();
    animateIcons(); // Ejecuta la animación de íconos también
});