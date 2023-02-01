import { isValid, mascCard } from "./validator.js";

function validar() {
  const inputNumeroCartao = document.getElementById("numero-cartao");
  const numeroCartao = inputNumeroCartao.value;
  const cartaoEhValido = isValid(numeroCartao);
  const resultado = document.getElementById("resultado");
  // console.log(resultado);
  const maskify = mascCard(numeroCartao);
  console.log("teste", maskify);

  if (numeroCartao === "") {
    resultado.innerHTML = "Digite um número";
  } else if (cartaoEhValido === true) {
    resultado.innerHTML = "Cartão Válido";
  } else {
    resultado.innerHTML = "Cartão Inválido";
  }
}
const btn = document.getElementById("btn-validar");
btn.addEventListener("click", validar);

function mascCard(numeroCartao) {
  return mascCard(numeroCartao);
}
