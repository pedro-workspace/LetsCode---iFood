console.log("Loged in");


    function Aluno (nome, idade, email, matricula, curso = "POO"){
        this.nome = nome;
        this.matricula = matricula;
        this.idade = idade;
        this.email = email;
        this.curso = curso
    }

Aluno.prototype.getCurso = function() {
    return this.curso;
}


const aluno1 = new Aluno("Pedro",
    25,
    'pedroworkspace@gmail.com',
    12345,
    "POO"
 );

console.log(aluno1);
console.log(aluno1.getCurso());