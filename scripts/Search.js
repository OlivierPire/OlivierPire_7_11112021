const submenuIngredients = document.getElementById("sub-1");
const submenuAppliance = document.getElementById("sub-2");
const submenuUstensiles = document.getElementById("sub-3");
const inputAppliances = document.getElementById("select_appliance_input");
const inputIngredients = document.getElementById("select_ingredient_input");
const inputUstensils = document.getElementById("select_ustensils_input");
const submenu = document.querySelectorAll(".submenu");
const main = document.querySelector("main");
const tagsContainer = document.querySelector(".tags_container");

export default class Search {
    constructor(allRecipes) {
        this.tags = {appliances:[], ustensils:[], ingredients:[]};
        this.allRecipes = allRecipes;
    }

    filterRecipes(word) {
        let appliancesArray = [];
        let ustensilsArray = [];
        let ingredientsArray = [];

        main.innerHTML = "";
        for(let recipe of this.allRecipes) {
            if (recipe.recipeHasAllTags(this.tags) && this.searchByInput(word, recipe)) {
            recipe.createCard(main);
            appliancesArray.push(recipe.appliance);
            for(let ustensil of recipe.ustensils) {
                ustensilsArray.push(ustensil)
            }
            for(let ingredient of recipe.ingredients) {
                ingredientsArray.push(ingredient.ingredient)
            }
        }}
        
        let uniqueAppliance = Array.from(new Set(appliancesArray));
        let uniqueIngredients = Array.from(new Set(ingredientsArray));
        let uniqueUstensils = Array.from(new Set(ustensilsArray));    

        this.displaySortedLists(word, uniqueAppliance, uniqueIngredients, uniqueUstensils)

        if (main.innerHTML == "") {
            main.innerHTML = "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
        }
    }

    searchByInput(word, recipe) {
        if(word.length > 2) {
            return (recipe.name.toLowerCase().includes(word.toLowerCase()) || recipe.description.toLowerCase().includes(word.toLowerCase()) || recipe.recipeHasIngredient(word.toLowerCase()))
        } else {
            return true
        }
    }

    displaySortedLists(word, uniqueAppliance, uniqueIngredients, uniqueUstensils) {
        submenuAppliance.innerHTML = "";
        submenuIngredients.innerHTML = "";
        submenuUstensiles.innerHTML = "";
        
        for(let element of uniqueAppliance) {
            const appliance = document.createElement("a");
            appliance.classList.add("list_element");
            submenuAppliance.appendChild(appliance);
            appliance.textContent = element;

            appliance.addEventListener("click", () => {
                this.tags.appliances.push(element);
                this.filterRecipes(word);
                tagsContainer.style.display = "flex";
                const tag = document.createElement("span");
                tag.classList.add("tag");
                tag.style.backgroundColor = "#68D9A4"
                tag.textContent = element;
                tagsContainer.appendChild(tag);
                const close = document.createElement("i");
                close.classList.add("far", "fa-times-circle");
                tag.appendChild(close);
                
                close.addEventListener("click", () => {
                    tag.style.display = "none";                   
                    let index = this.tags.appliances.indexOf(element);
                    if (index > -1) {
                        this.tags.appliances.splice(index, 1);
                    }
                    this.filterRecipes(word)
                });
            })

            inputAppliances.addEventListener("input", (e) => {
                appliance.style.display = "none";
                if(element.toLowerCase().includes(e.target.value.toLowerCase())) {
                    appliance.style.display = "block"
                }
            });
        }
                
        
        for(let element of uniqueIngredients) {
            const ingredients = document.createElement("a");
            ingredients.classList.add("list_element");
            submenuIngredients.appendChild(ingredients);
            ingredients.textContent = element;

            ingredients.addEventListener("click", () => {
                this.tags.ingredients.push(element);
                this.filterRecipes(word)
                tagsContainer.style.display = "flex";
                const tag = document.createElement("span");
                tag.classList.add("tag");
                tag.style.backgroundColor = "#3282F7";
                tag.textContent = element;
                tagsContainer.appendChild(tag);
                const close = document.createElement("i");
                close.classList.add("far", "fa-times-circle");
                tag.appendChild(close);
                close.addEventListener("click", () => {
                    tag.style.display = "none";
                    let index = this.tags.ingredients.indexOf(element);
                    if (index > -1) {
                        this.tags.ingredients.splice(index, 1);
                    }                   
                    this.filterRecipes(word)
                });
            })

            inputIngredients.addEventListener("input", (e) => {
                ingredients.style.display = "none";
                if(element.toLowerCase().includes(e.target.value.toLowerCase())) {
                    ingredients.style.display = "block";
                }
            });
        };
        
        for(let element of uniqueUstensils) {
            const ustensils = document.createElement("a");
            ustensils.classList.add("list_element");
            submenuUstensiles.appendChild(ustensils);
            ustensils.textContent = element;
            ustensils.addEventListener("click", () => {
                this.tags.ustensils.push(element);
                this.filterRecipes(word)
                tagsContainer.style.display = "flex";
                const tag = document.createElement("span");
                tag.classList.add("tag");
                tag.style.backgroundColor = "#ED6454"
                tag.textContent = element;
                tagsContainer.appendChild(tag);
                const close = document.createElement("i");
                close.classList.add("far", "fa-times-circle");
                tag.appendChild(close);
                close.addEventListener("click", () => {
                    tag.style.display = "none";
                    let index = this.tags.ustensils.indexOf(element);
                    if (index > -1) {
                        this.tags.ustensils.splice(index, 1);
                    }
                    this.filterRecipes(word)
                })
            })

            inputUstensils.addEventListener("input", (e) => {
                ustensils.style.display = "none";
                if(element.toLowerCase().includes(e.target.value.toLowerCase())) {
                    ustensils.style.display = "block";
                }
            });
        };           
    }   
} 