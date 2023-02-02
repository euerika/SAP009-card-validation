import validator from "./validator.js";
const resultado = document.getElementById("resultado");
const botao = document.getElementById("btn-validar");
botao.addEventListener("click", validar);
function validar() {
  const numeroCartao = document.getElementById("numero-cartao").value;
  const soma = validator.isValid(numeroCartao);
  const maskNumbers = validator.maskify(numeroCartao);
  console.log(maskNumbers);

  if (numeroCartao === "") {
    resultado.innerHTML = "Digite um número por favor!";
  } else if (numeroCartao.length < 13) {
    resultado.innerHTML = "bananinha";
  } else if (soma === true) {
    resultado.innerHTML = "Cartão Válido!" + maskNumbers;
  } else {
    resultado.innerHTML = "Cartão Inválido";
  }
}
console.log(validator);
