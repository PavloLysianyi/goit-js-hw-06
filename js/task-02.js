const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");
ingredients.forEach((ingredient) => {
  const newIngredient = document.createElement("li");
  newIngredient.textContent = ingredient;
  newIngredient.classList.add("item");
  ingredientsList.appendChild(newIngredient);
});
