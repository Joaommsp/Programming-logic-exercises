const heroi = ["Super Rato", 10000.0];
let elo = "";

if (heroi[1] < 1000) {
  elo = "Ferro";
} else if (heroi[1] >= 1000 && heroi[1] < 2000) {
  elo = "Bronze";
}
else if(heroi[1] >= 2000 && heroi[1] < 5000) {
  elo = "Prata"
}
else if(heroi[1] >= 5000 && heroi[1] < 7000) {
  elo = "Ouro"
}
else if(heroi[1] >= 7000 && heroi[1] < 8000) {
  elo = "Platina"
}
else if(heroi[1] >= 8000 && heroi[1] < 9000) {
  elo = "Ascendente"
}
else if(heroi[1] >= 9000 && heroi[1] < 10000) {
  elo = "Imortal"
}
else if(heroi[1] >= 10000) {
  elo = "Radiante"
}

console.log("O Heroi de nome " + heroi[0] + " está no elo " + elo)