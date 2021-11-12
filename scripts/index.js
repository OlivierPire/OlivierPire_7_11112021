import { recipes } from "./data.js";
import Recipe from "./Recipe.js";

const main = document.querySelector("main");

recipes.forEach((element) => {
    const recipe = new Recipe(
        element.id,
        element.name,
        element.servings,
        element.ingredients,
        element.time,
        element.description,
        element.appliance,
        element.ustensils
    );
    recipe.createCard(main)
});