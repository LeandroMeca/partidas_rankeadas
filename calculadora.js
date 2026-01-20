console.log(dadosDeRank(120, 8));

function dadosDeRank(vitorias, derrotas) {
  let calculo = vitorias - derrotas;
  return calculoDeNivel(calculo);
}

function calculoDeNivel(rank) {
  let resultadoDoCalculo = "";

  if (rank < 10) {
    resultadoDoCalculo = "Ferro";
  } else if (rank >= 11 && rank <= 20) {
    resultadoDoCalculo = "Bronze";
  } else if (rank >= 21 && rank <= 50) {
    resultadoDoCalculo = "Prata";
  } else if (rank >= 51 && rank <= 80) {
    resultadoDoCalculo = "Ouro";
  } else if (rank >= 81 && rank <= 90) {
    resultadoDoCalculo = "Diamante";
  } else if (rank >= 91 && rank <= 100) {
    resultadoDoCalculo = "Lendário";
  } else if (rank >= 101) {
    resultadoDoCalculo = "Imortal";
  }

  return `O Herói tem de saldo de ${rank} está no nível de ${resultadoDoCalculo}`;
}
