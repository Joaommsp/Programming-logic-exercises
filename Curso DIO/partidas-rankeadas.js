function calcularPatente(qtdVitorias, qtdDerrotas) {
  const saldoDeVitorias = qtdVitorias - qtdDerrotas;
  let patente = "";

  if (saldoDeVitorias < 10) {
    patente = "Ferro";
  } else if (saldoDeVitorias > 10 && saldoDeVitorias <= 20) {
    patente = "Bronze";
  } else if (saldoDeVitorias > 20 && saldoDeVitorias <= 50) {
    patente = "Prata";
  } else if (saldoDeVitorias > 50 && saldoDeVitorias <= 80) {
    patente = "Ouro";
  } else if (saldoDeVitorias > 80 && saldoDeVitorias <= 90) {
    patente = "Diamante";
  } else if (saldoDeVitorias > 90 && saldoDeVitorias <= 100) {
    patente = "Lendário";
  } else if (saldoDeVitorias > 100) {
    patente = "Imortal";
  }

  return `O Herói tem saldo de ${saldoDeVitorias} e está no nível ${patente}`;
}

console.log(calcularPatente(100, 10));
