document.addEventListener('DOMContentLoaded', () => {
    // 1. Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    const icon = themeToggle.querySelector('i');

    // Check saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // 2. Publication Filter
    const searchInput = document.getElementById('pub-search');
    const pubItems = document.querySelectorAll('.pub-item');

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        
        pubItems.forEach(item => {
            const text = item.innerText.toLowerCase();
            if (text.includes(term)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});