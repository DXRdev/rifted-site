document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("mobile-menu");
    const sidebar = document.getElementById("sidebar");

    if (!button || !sidebar) return;

    button.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle("open");
    });

    // Close sidebar when tapping outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !button.contains(e.target)) {
            sidebar.classList.remove("open");
        }
    });
});
