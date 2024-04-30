
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome,
    this.idade = idade,
    this.tipo = tipo
  }

  Atacar = function() {
    let ataque = ""
    if(this.tipo == "Mago") ataque = "Magia" 
    else if(this.tipo == "GUuerreiro") ataque = "espada"
    else if(this.tipo == "Ninja") ataque = "Katana"
    return `${this.nome} do tipo ${this.tipo} atacou usando ${ataque}`
  }

}

let magoJao = new Heroi("Joao", "21", "Mago")

console.log(magoJao.Atacar())