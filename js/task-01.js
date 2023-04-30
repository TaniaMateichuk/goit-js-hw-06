const categoriesItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItemEl.length}`);
categoriesItemEl.forEach(e => {
console.log(`Category:${e.firstElementChild.textContent}`);
const listItemEl = e.querySelectorAll("li");
console.log(`Elements: ${ listItemEl.length }`);
})




