const input = document.getElementById("validation-input");

input.addEventListener("blur", handleInputBlur);

function handleInputBlur() {
  const inputLength = input.value.length;
  const requiredLength = +input.dataset.length;

  if (inputLength === requiredLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
