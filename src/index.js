import validator from "./validator.js";

const resultado = document.getElementById("resultado");
const botao = document.getElementById("btn-validar");
botao.addEventListener("click", validar);

function validar() {
  const numeroCartao = document.getElementById("numero-cartao").value;
  const soma = validator.isValid(numeroCartao);
  const maskNumbers = validator.maskify(numeroCartao);

  if (!numeroCartao) {
    return resultado.innerHTML = "Digite um número por favor!";
  } else if (numeroCartao.length < 13) {
    return resultado.innerHTML = "Complete os números, por favor!";
  } else if (soma) {
    return resultado.innerHTML = "Cartão Válido! " + maskNumbers;
  } 
  return resultado.innerHTML = "Cartão Inválido! Tente novamente.";
  
}
