export default class Recipe {
    constructor(id, name, servings, ingredients, time, description, appliance, ustensils) {
        this.id = id,
        this.name = name,
        this.servings = servings,
        this.ingredients = ingredients,
        this.time = time,
        this.description = description,
        this.appliance = appliance,
        this.ustensils = ustensils
    }

    createCard(main) {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe_card");
        main.appendChild(recipeCard);

        const image = document.createElement("img");
        image.classList.add("recipe_img");
        image.src = "../images/cook.jpg";
        recipeCard.appendChild(image);

        const infos = document.createElement("div");
        infos.classList.add("infos");
        recipeCard.appendChild(infos);

        const recipeName = document.createElement("h2");
        recipeName.classList.add("title");
        recipeName.textContent = this.name;
        infos.appendChild(recipeName);

        const time = document.createElement("div");
        time.classList.add("time");
        infos.appendChild(time);

        const timeIcon = document.createElement("i");
        timeIcon.classList.add("far", "fa-clock");
        time.appendChild(timeIcon);

        const minutes = document.createElement("p");
        minutes.textContent = this.time;
        time.appendChild(minutes);

        const description = document.createElement("div");
        description.classList.add("description");
        recipeCard.appendChild(description);

        const ingredients_container = document.createElement("div");
        ingredients_container.classList.add("ingredients");
        description.appendChild(ingredients_container);

        const ingredientList = document.createElement("ul");
        ingredients_container.appendChild(ingredientList);

        for(let i = 0; i<this.ingredients.length; i++) {
            let ingredientLi = document.createElement("li");
            ingredientList.appendChild(ingredientLi);

            const ingredient = document.createElement("span");
            ingredient.textContent = this.ingredients[i].ingredient + " : ";
            ingredient.style.fontWeight = "bold";
            ingredientLi.appendChild(ingredient);

            const quantity = document.createElement("span");
            quantity.textContent = this.ingredients[i].quantity;
            ingredientLi.appendChild(quantity);

            const unit = document.createElement("span");
            if(this.ingredients[i].unit == undefined) {
                unit.textContent = "";
            } else {
                unit.textContent = " " + this.ingredients[i].unit;
                ingredientLi.appendChild(unit);
            }
        }

        const instructions = document.createElement("p");
        instructions.classList.add("instructions");
        instructions.textContent = this.description;
        description.appendChild(instructions);      
    }

    recipeHasIngredient(word) {
        return this.ingredients.some((ingredient)=>ingredient.ingredient.includes(word));
    }

    recipeHasAppliance(word) {
        return this.appliance.includes(word)
    }
    
    recipeHasUstensils(word) {
        return this.ustensils.some((ustensils)=>ustensils.includes(word));
    }

    recipeHasAllTags(tags) {
        let counter = 0;
        counter += tags.ingredients.length + tags.appliances.length + tags.ustensils.length;
        let counterRecipe = 0;

        for(let i =0; i<tags.ingredients.length; i++) {
            if(this.recipeHasIngredient(tags.ingredients[i])) {
                counterRecipe++;
            }
        }

        for(let i =0; i<tags.appliances.length; i++) {
            if(this.recipeHasAppliance(tags.appliances[i])) {
                counterRecipe++;
            }
        }

        for(let i =0; i<tags.ustensils.length; i++) {
            if(this.recipeHasUstensils(tags.ustensils[i])) {
                counterRecipe++;
            }
        }

        if(counterRecipe == counter) {
            return true
        } 
        return false
    }
};




