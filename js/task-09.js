function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textSpanEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');

changeColorBtn.addEventListener("click", onChangeBackgroundColor);

function onChangeBackgroundColor() {
  const color = getRandomHexColor();
  textSpanEl.textContent = color;
  body.style.backgroundColor = color;

}