console.log("===Aferir Idade===");

// function aferir (idade) {
//     idade = document.getElementById('idade').value;

//     if (idade < 18) {
//         console.log("Não é adulto");
//         document.getElementById("faixa").value = 'Não é adulto';
//     } else {
//         document.getElementById("faixa").value = "É adulto";
//     }
// }

function aferir(idade) {
    idade = document.getElementById("idade").value;
    let resp = '';

    if (idade <= 12) {
        resp = 'criança';
    } else if (idade < 17) {
        resp = 'adolecente';
    } else if (idade <= 64) {
        resp='adulto';
    } else {
        resp = 'idoso'
    }

    document.getElementById("faixa").value = resp;
}
