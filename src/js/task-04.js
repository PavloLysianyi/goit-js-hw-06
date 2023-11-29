let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterSpan = document.getElementById("value");

decrementButton.addEventListener("click", decrementCounter);
incrementButton.addEventListener("click", incrementCounter);

function decrementCounter() {
  counterValue -= 1;
  updateCounter();
}

function incrementCounter() {
  counterValue += 1;
  updateCounter();
}

function updateCounter() {
  counterSpan.textContent = counterValue;
}
