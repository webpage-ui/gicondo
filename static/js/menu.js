document.addEventListener("DOMContentLoaded", () => {
    const toggleMenu = document.querySelector(".toggle");
    const menu = document.querySelector(".sidebar");

    toggleMenu.onclick = function () {
        toggleMenu.classList.toggle("active");
        menu.classList.toggle("active");
    }
});