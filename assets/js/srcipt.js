let Cantidad = document.querySelector("#cantidad");
let precio = 10000;
let color = document.querySelector("#color");
let button = document.querySelector("#btntotal");

button.addEventListener("click", () => {
  document.querySelector("#total").innerHTML = (
    Cantidad.value * precio
  ).toLocaleString();
  document.querySelector("#dias").innerHTML = Cantidad.value;
  document.querySelector("#colord").style.backgroundColor = color.value;
});
