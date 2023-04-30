const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingrigientsItem = ingredients.map(element => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.textContent = element;
  ingredientsItemEl.classList.add(".item");
  return ingredientsItemEl;
})

console.log(ingrigientsItem); 

const listEl = document.querySelector("#ingredients");

listEl.append(...ingrigientsItem);
console.log(listEl)

