const toggleButton = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const wrapper = document.querySelector('.wrapper');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    wrapper.classList.toggle('collapsed');
});
