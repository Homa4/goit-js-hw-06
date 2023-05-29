const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const recipe = document.getElementById("ingredients");

// for (let i = 0; i < ingredients.length; i++) {
//   const listItem = document.createElement("li");
//   listItem.textContent = ingredients[i];
//   recipe.appendChild(listItem);
// }s
const recipe = document.getElementById("ingredients");

for (const ingredient of ingredients) {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  recipe.appendChild(listItem);
  listItem.classList.add("item");
}
