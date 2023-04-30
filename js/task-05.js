const textInputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

textInputEl.addEventListener("input", onAddTextInput);

function onAddTextInput(event) {
    let value = event.currentTarget.value;
if (value === "") {
  value = "Anonymouse";
}
    outputEl.textContent = value;
}

