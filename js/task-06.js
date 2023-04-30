const textInputEl = document.querySelector("#validation-input");


textInputEl.addEventListener('blur', onLengthValidation)


function onLengthValidation() {
    let valueLength = textInputEl.value.length;
    console.log(valueLength);
    let dataLength = Number(textInputEl.getAttribute("data-length"));
    console.log(dataLength);

    if (valueLength === dataLength) {
        textInputEl.classList.add('valid');
        
    } else {
        textInputEl.classList.add('invalid');
        
    };
}