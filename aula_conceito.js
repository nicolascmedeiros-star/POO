// Objeto em JavaScript :)
const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2023,
  cor: 'Azul'
};

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);
console.log(carro.cor);

// Método em JavaScript :)
const pessoa = {
  nome: 'Ana',
  idade: '28',
  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
};

console.log(pessoa.apresentar());

// Classe em JavaScript :)
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
};

// Criando instâncias com `new`

const ana = new Pessoa('Ana', 28);
const pedro = new Pessoa('Pedro', 35);

console.log(ana.apresentar());
console.log(pedro.apresentar());
