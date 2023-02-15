const validator = {
  isValid: function isValid(numeroCartao) {
    //foi criarda uma var array para pegar o numero do cartão e dividir uma string em uma lista ordenada; O map number pega cada valor do array e transforma ele em um número.
    const arrayNumeroCartao = numeroCartao.split("").map(Number);
    //Criei uma var reverse que recebe o número do cartão e inverte as posições dos números digitados;
    const reverseNumeroCartao = arrayNumeroCartao.reverse();
    //minha soma vai iniciar na posição 0
    let soma = 0;
    //1° É variável de controle; 2° lógica de loop (até for verdade); 3° incremento da variavel de controle;
    for (let i = 0; i < reverseNumeroCartao.length; i++) {
      //// pega o numero que esta na posição i soma + 1, pega o valor do resto da divisão e * por 2 e guarda na constante numerosMult
      if ((i + 1) % 2 === 0) {
        const numerosMult = reverseNumeroCartao[i] * 2;

        if (numerosMult < 10) {
          soma += numerosMult;
        } else if (numerosMult >= 10) soma += numerosMult - 9;
      } else {
        soma += parseInt(arrayNumeroCartao[i]);
      }
    }
    // Função para validar o cartão. (Se a soma for divisivel por 10 com resto zero)
    if (soma % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },
  //função para mascarar os números
  maskify: function maskify(numeroCartao) {
    const maskCard = [];
    
    for (let i = 0; i < numeroCartao.length; i++) {
      if (i < numeroCartao.length - 4) {
        maskCard.push("#");
      } else {
        maskCard.push(numeroCartao[i]);
      }
    }
    const maskNumber = maskCard.join("");
    return maskNumber;
  },
};
export default validator;
