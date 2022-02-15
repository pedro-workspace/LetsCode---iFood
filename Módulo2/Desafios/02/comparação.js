console.log("Loged in");
console.log("Comparação, 'maior que'");

//Código:

function checar(n1 = 0, n2 = 0) {
    n1 = parseInt(document.getElementById("n1").value);
    n2 = parseInt(document.getElementById("n2").value);
    let validate = (n1 > n2);
    document.getElementById("result").value = validate;
    console.log("O resultado é: ", validate);
}
