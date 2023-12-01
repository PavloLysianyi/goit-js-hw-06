const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

const ingredientsMarkup = ingredients.map((ingredient) => {
  const newIngredient = document.createElement("li");
  newIngredient.textContent = ingredient;
  newIngredient.classList.add("item");
  return newIngredient;
});

ingredientsList.append(...ingredientsMarkup);
