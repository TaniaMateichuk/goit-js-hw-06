const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEL = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
console.log(valueEl);

const counterValue = {
    value: 0,
    decrement(value) {
        this.value -= 1;
    },
    increment(value) {
        this.value += 1;
    },
    
};
btnDecrementEl.addEventListener('click', () => {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});
btnIncrementEL.addEventListener('click', () => {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
})