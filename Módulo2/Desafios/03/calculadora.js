console.log("=== Calculadora ===");

function calcular(num1 = 0, num2 = 0) {
    console.log("CLICK!!!");
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    let soma = 0;
    soma = num1 + num2;
    document.getElementById('resp').value = soma;
    console.log("Valor da soma: " ,soma);
}


//Como funciona


//Entrada e captura de dados:

const num1 = parseInt(document.getElementById("num1").value);
const num2 = parseInt(document.getElementById("num2").value);
console.log(num1, typeof num1);
console.log(num2, typeof num2);

//Processamento:

const total = num1 + num2;
console.log(total)
