document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const menuItems = document.getElementById("menuItems");
    const viewer = document.querySelector(".viewer");
    const viewerImage = viewer.querySelector("img");
    const closeButton = document.querySelector(".close-viewer");
    const images = document.querySelectorAll("main img");

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

    images.forEach(image => {
        image.addEventListener("click", function() {
            viewerImage.src = image.src;
            viewer.classList.add("show");
        });
    });

    // Close the viewer when the close button is clicked
    closeButton.addEventListener("click", function() {
        viewer.classList.remove("show");
    });

    // Optional: Close the viewer when clicking outside the image
    viewer.addEventListener("click", function(event) {
        if (event.target === viewer) {
            viewer.classList.remove("show");
        }
    });
});

