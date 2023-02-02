const validator = {
  isValid: function isValid(numeroCartao) {
    const arrayNumeroCartao = numeroCartao.split("").map(Number);
    const reverseNumeroCartao = arrayNumeroCartao.reverse();
    let soma = 0;
    for (let i = 0; i < reverseNumeroCartao.length; i++) {
      console.log("teste1");

      if ((i + 1) % 2 === 0) {
        const numerosMult = reverseNumeroCartao[i] * 2;
        console.log("teste2");

        if (numerosMult < 10) {
          soma += numerosMult;
          console.log("teste3");
        } else if (numerosMult >= 10) soma += numerosMult - 9;
        console.log("teste4");
      } else {
        soma += parseInt(arrayNumeroCartao[i]);
      }
      console.log("teste 5");
    }
    // Função para validar o cartão. (Se a soma for divisivel por 10 com rsto zero)
    if (soma % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },
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
