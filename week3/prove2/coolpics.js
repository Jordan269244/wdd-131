document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const menuItems = document.getElementById("menuItems");

    menuToggle.addEventListener("click", function() {
        // Toggle a class to show or hide the menu
        menuItems.classList.toggle("show-menu");
    });

    // Add a resize event listener
    window.addEventListener("resize", function() {
        // Check if the window width is greater than 1000px
        if (window.innerWidth > 1000) {
            menuItems.classList.add("show-menu"); // Show the menu items
        } else {
            menuItems.classList.remove("show-menu"); // Hide the menu items on smaller screens
        }
    });
});
