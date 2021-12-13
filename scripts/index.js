import { recipes } from "./data.js";
import Recipe from "./Recipe.js";
import Search from "./Search.js";
import { dropdown } from "./dropdown.js";

const allRecipes = [];
const searchBar = document.getElementById("search");

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
  allRecipes.push(recipe);
});

const search = new Search(allRecipes);

search.filterRecipes("");

searchBar.addEventListener("input", (e) => {
  search.filterRecipes(e.target.value);
});

dropdown();
