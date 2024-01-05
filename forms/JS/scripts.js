const price = document.querySelector("#test_slider");
const output = document.querySelector(".price-output");

output.textContent = price.value;

price.addEventListener('input', () => {
  output.textContent = price.value;
});