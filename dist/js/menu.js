
const toggleButtons = [
    document.getElementById("view1"),
    document.getElementById("view2"),
    document.getElementById("view3"),
    document.getElementById("view4"),
    document.getElementById("view5")
];

const ingredientLists = [
    document.getElementById("ingredientlist1"),
    document.getElementById("ingredientlist2"),
    document.getElementById("ingredientlist3"),
    document.getElementById("ingredientlist4"),
    document.getElementById("ingredientlist5")
];

for (let i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener("click", function () {
        toggleIngredients(ingredientLists[i], toggleButtons[i]);
    });
}

function toggleIngredients(ingredientsList, toggleButton) {
    if (ingredientsList.style.display === "none" || ingredientsList.style.display === "") {
        ingredientsList.style.display = "block";
        toggleButton.textContent = "Hide Ingredients";
    } else {
        ingredientsList.style.display = "none";
        toggleButton.textContent = "View Ingredients";
    }
}
