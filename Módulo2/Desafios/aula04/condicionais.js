console.log("===Condicionais===");
console.log("Loged in...");

// entrada:



console.log("Nota do aluno e nome");


// processamento:

function grade(){

    let aluno = prompt("Nome do aluno: ");
    let nota = prompt("Nota: ");
    let resp = '';

    if (nota >= 6){
        resp = 'Aprovado';
    } else if (nota > 4 && nota < 6){
        resp = 'Em recuperação';
    } else {
        resp = "Reprovado";
    }

    console.log(aluno, " foi ",resp);
}
grade();

document.write("Aluno: $(nome)");
document.write("Nota: $(nota)");
