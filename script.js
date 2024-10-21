window.addEventListener('scroll', () => {
    const serviceItems = document.querySelectorAll('.service-item');
    const triggerHeight = window.innerHeight / 1.2;

    serviceItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerHeight) {
            item.classList.add('show');
        }
    });
});

window.addEventListener('scroll', () => {
    const experienceItems = document.querySelectorAll('.experience-item');
    const triggerHeight = window.innerHeight / 1.2;

    experienceItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerHeight) {
            item.classList.add('show');
        }
    });
});
