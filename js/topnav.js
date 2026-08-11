document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    // Function execution wrappers
    const toggleMenu = () => {
        sideMenu.classList.toggle('open');
        menuOverlay.classList.toggle('open');
    };

    const closeMenu = () => {
        sideMenu.classList.remove('open');
        menuOverlay.classList.remove('open');
    };

    // Toggle menu state via brand line button interactions
    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation(); // Shield events from bubble conflicts
        toggleMenu();
    });

    // Capture background clicks anywhere outside the panel layout
    menuOverlay.addEventListener('click', closeMenu);

    // Auto-close drawer layout whenever page anchor link jumps occur
    const navLinks = sideMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Keyboard accessibility support escape key handling
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
});
