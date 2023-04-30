const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();


    const formElements = event.currentTarget.elements;
    const email = formElements.value;
    const password = formElements.value;

    if (email === "" || password === "") {
        alert("Заповніть, будь-ласка, всі пусті поля")
    }
    
    const formData = new FormData(event.currentTarget);
    
    console.log({ email, password });
    alert("Дані відправлено")
    event.currentTarget.reset();
}
