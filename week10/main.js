import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const randomIndex = random(list.length);
    return list[randomIndex];
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span
        class="rating"
        role="img"
        aria-label="Rating: ${rating} out of 5 stars">
    `;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `
        <figure class="recipe">
            <img src="${recipe.image}" alt="${recipe.name}">
            <figcaption>
                <ul class="recipe__tags">
                    ${tagsTemplate(recipe.tags)}
                </ul>
                <h2>${recipe.name}</h2>
                <p class="recipe__ratings">
                    ${ratingTemplate(recipe.rating)}
                </p>
                <p class="recipe__description">${recipe.description}</p>
            </figcaption>
        </figure>
    `;
}

function renderRecipe(recipe) {
    const main = document.querySelector('main');
    main.innerHTML = recipeTemplate(recipe);
}

function init() {
    const randomRecipe = getRandomListEntry(recipes);
    renderRecipe(randomRecipe);
}

window.addEventListener('DOMContentLoaded', init);
