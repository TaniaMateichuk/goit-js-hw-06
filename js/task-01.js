const categoriesItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItemEl.length}`);
categoriesItemEl.forEach(e => {
console.log(`Category:${e.firstElementChild.textContent}`);
console.log(`Elements: ${e.lastElementChild.children.length}`);
})




