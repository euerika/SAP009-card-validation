export function ehValido(numeroCartao) {
  const arrayNumeroCartao = numeroCartao.split("").reverse();
  let soma = 0;

  // 1°E variavel de controle; 2° lógica de loop (até for verdade); 3° incremento da variavel de controle
  for (let i = 0; i < arrayNumeroCartao.length; i = i + 1) {
    console.log("indice", i, arrayNumeroCartao[i]);

    if (i % 2 === 0) {
      // pega o numero que esta na posição i e * por 2 e guarda na constante dobro
      const dobro = arrayNumeroCartao[i] * 2;
      if (dobro > 9) {
        soma = soma + (dobro - 9);
      } else {
        soma = soma + dobro;
      }
    } else {
      soma + soma + arrayNumeroCartao[i];
    }
  }
  // Função para Validar o Cartão
  if (soma % 10 === 0) {
    return true;
  } else {
    return false;
  }
}
