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
