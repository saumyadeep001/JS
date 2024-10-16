const icon = document.getElementById('icon');

// Toggle theme between light and dark mode
icon.addEventListener('click', () => {
    const root = document.documentElement;

    // Check current theme
    const isLightMode = getComputedStyle(root).getPropertyValue('--primary-color') === '#f4f4f9';

    // Toggle theme colors
    if (isLightMode) {
        // Dark mode
        root.style.setProperty('--primary-color', '#333');
        root.style.setProperty('--secondary-color', '#f4f4f9');
        root.style.setProperty('--text-color', '#f4f4f9');
        root.style.setProperty('--card-bg-color', '#444');
    } else {
        // Light mode
        root.style.setProperty('--primary-color', '#f4f4f9');
        root.style.setProperty('--secondary-color', '#333');
        root.style.setProperty('--text-color', '#333');
        root.style.setProperty('--card-bg-color', '#fff');
    }
});
