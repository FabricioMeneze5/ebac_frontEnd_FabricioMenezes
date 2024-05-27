function Animal(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;


    this.dormir = function() {
        console.log("zzzz");
    }

    this.respirar = function() {
        console.log("respirando");
    }
}

function Mamifero(nome, pelos, quantidadeDePatas) {
    Animal.call(this, nome, "Mamifero");

    this.pelos = pelos;
    this.quantidadeDePatas = quantidadeDePatas;

    this.locomover = function() {
        console.log("correndo");
    }
}

function Aves(nome, corDasPenas, asas, bico) {
    Animal.call(this, nome, "Aves");

    this.corDasPenas = corDasPenas;
    this.asas = asas;
    this.bico = bico;

    this.voar = function() {
        console.log("voando");
    }
}

function Peixe(nome, escama) {
    Animal.call(this, nome, "Peixe");

    this.escama = escama;

    this.nadar = function() {
        console.log("nadando");
    }
}

const Animal1 = new Peixe("tubarao", "carnivoro", "rugosa");
const Animal2 = new Aves("coruja", "marrom", "longa", "curto");
const Animal3 = new Mamifero("humano", "poucos", 2);

console.log(Animal1);
console.log(Animal2);
console.log(Animal3);