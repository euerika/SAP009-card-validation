import { ehValido } from "./validator.js";

function validar() {
  const inputNumeroCartao = document.getElementById("numero-cartao");
  const numeroCartao = inputNumeroCartao.value;
  const cartaoEhValido = ehValido(numeroCartao);
  const resultado = document.getElementById("resultado");

  if (cartaoEhValido === true) {
    resultado.innerHTML = "Cartão Válido!";
  } else {
    resultado.innerHTML = "Cartão Inválido";
  }
}
const btn = document.getElementById("btn-validar");
btn.addEventListener("click", validar);
