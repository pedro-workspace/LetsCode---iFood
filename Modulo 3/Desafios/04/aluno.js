console.log("Loged in");


function Aluno(nome, idade, email, matrícula, curso) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.matrícula = matrícula;
    this.curso = curso;
}

console.log(Aluno);

Aluno.prototype.getCurso = function() {
    return this.curso;
}

const aluno = new Aluno("Pedro", 25, "pedroworkspace@gmail.com", 12345, "POO")

console.log(aluno.getCurso());