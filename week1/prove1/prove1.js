function changeTheme() {
    const themeSelector = document.getElementById("mode-selector");
    const selectedTheme = themeSelector.value;
    const body = document.body;
    const lightImage = document.getElementById("light-image");
    const darkImage = document.getElementById("dark-mode-img");

    const h1 = document.querySelector("h1");
    const h4 = document.querySelector("h4");
    const largeText = document.getElementById("large");
    const smallText = document.getElementById("small");
    const listItems = document.querySelectorAll(".does-list li");

    if (selectedTheme === "dark") {

        body.classList.remove("light-mode");
        body.classList.add("dark-mode");

        h1.classList.remove("light-mode");
        h1.classList.add("dark-mode");

        h4.classList.remove("light-mode");
        h4.classList.add("dark-mode");

        largeText.classList.remove("light-mode");
        largeText.classList.add("dark-mode");

        smallText.classList.remove("light-mode");
        smallText.classList.add("dark-mode");

        listItems.forEach(item => {
            item.classList.remove("light-mode");
            item.classList.add("dark-mode");
        });

        lightImage.style.display = "none";
        darkImage.style.display = "block";
        localStorage.setItem("theme", "dark");
    } else if (selectedTheme === "light") {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");

        h1.classList.remove("dark-mode");
        h1.classList.add("light-mode");

        h4.classList.remove("dark-mode");
        h4.classList.add("light-mode");

        largeText.classList.remove("dark-mode");
        largeText.classList.add("light-mode");

        smallText.classList.remove("dark-mode");
        smallText.classList.add("light-mode");

        listItems.forEach(item => {
            item.classList.remove("dark-mode");
            item.classList.add("light-mode");
        });

        darkImage.style.display = "none";
        lightImage.style.display = "block";
        localStorage.setItem("theme", "light");
    }
}
