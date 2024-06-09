//criando a classe
class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const alunoArray = [];

//adiciona objetos ao array
function addAluno(nome, nota) {
    let aluno = new Aluno(nome, nota);
    alunoArray.push(aluno);
}

//cria objetos
addAluno('Fabricio', 10);
addAluno('Joao', 5);
addAluno('Carlos', 7);
addAluno('Ivan', 3);
addAluno('Kavin', 10);
addAluno('Brendon', 6);

//filtra alunos aprovados
const alunosAprovados = alunoArray.filter(function(item) {
    return item.nota >= 6;
})

//retorna alunos aprovados
console.log(alunosAprovados);


