export function dropdown() {
    const selectIngredients = document.getElementById("select_ingredients");
    const selectUstensils = document.getElementById("select_ustensiles");
    const selectAppareil = document.getElementById("select_appareil");
    const submenuIngredients = document.getElementById("sub-1");
    const select = document.querySelectorAll(".select");
    const submenuAppareil = document.getElementById("sub-2");
    const submenuUstensiles = document.getElementById("sub-3");
    const chevronIngredients = document.querySelector("#select_ingredients > .fa-chevron-down");
    const chevronAppareil = document.querySelector("#select_appareil> .fa-chevron-down");
    const chevronUstensiles = document.querySelector("#select_ustensiles> .fa-chevron-down");

    const ingredientsOff = () => {
        submenuIngredients.style.display = "none";
        chevronIngredients.style.transform = "rotate(0deg)"
        selectIngredients.style.width = "150px";
    }

    const ustensilsOff = () => {
        submenuUstensiles.style.display = "none"; 
        chevronUstensiles.style.transform = "rotate(0deg)";
        selectUstensils.style.width = "150px";
    }

    const appareilOff = () => {
        submenuAppareil.style.display = "none";
        chevronAppareil.style.transform = "rotate(0deg)";
        selectAppareil.style.width = "150px";
    }
    
    select.forEach((selector) => {
        selector.addEventListener("click", () => {
            if (selector.id == "select_ingredients" && submenuIngredients.style.display != "flex") {
                submenuIngredients.style.display = "flex";
                chevronIngredients.style.transform = "rotate(180deg)";
                selector.style.width = "550px";
                appareilOff();
                ustensilsOff();
            } else if (submenuIngredients.style.display != "none" && selector.id == "select_ingredients"){
                ingredientsOff();
            } 

            else if (selector.id == "select_appareil" && submenuAppareil.style.display != "flex") {
                submenuAppareil.style.display = "flex";
                chevronAppareil.style.transform = "rotate(180deg)";
                selector.style.width = "550px";
                ingredientsOff();
                ustensilsOff();
            } else if (submenuAppareil.style.display != "none" && selector.id == "select_appareil"){
                appareilOff();
            } 

            else if (selector.id == "select_ustensiles" && submenuUstensiles.style.display != "flex") {
                submenuUstensiles.style.display = "flex";
                chevronUstensiles.style.transform = "rotate(180deg)"
                selector.style.width = "550px";
                ingredientsOff();
                appareilOff();
            } else if (submenuUstensiles.style.display != "none" && selector.id == "select_ustensiles"){
                ustensilsOff();
            } 
        })
    })
    
}
