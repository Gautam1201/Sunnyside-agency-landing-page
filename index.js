const navMenu = document.getElementById("nav-menu-component");
const toggleIcon = document.getElementById("toggle-btn");

toggleIcon.addEventListener("click", () => {
    navMenu.classList.toggle("hide");
    toggleIcon.classList.toggle("invert-color");
});