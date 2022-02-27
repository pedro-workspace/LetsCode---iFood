console.log("Loged in...");

function gasto(){
    console.log("vamo lá");

    let distancia = document.getElementById("distancia").value;
    let encomenda = document.getElementById("encomenda").value;
    let q_rodados = ((10 * 2) + (distancia * 2)) * encomenda;
    let dias = document.getElementById("dias").value;
    let gasto_mes = q_rodados * 5.50 * dias;
    let litro = (q_rodados / 12) * dias;
    console.log("Gasto mensal: ", gasto_mes);
    document.getElementById("gasto").value = "R$" + gasto_mes;
    console.log("litro de gasolina: ", litro);
    document.getElementById("litro").value = litro.toPrecision(4);
    console.log('Agora, quantas vezes Paulo vai precisar abastecer: ');
    let abastecer = litro / 40;
    console.log(abastecer);
    document.getElementById("abastecer").value = Math.ceil(abastecer);
    console.log("Compilado com sucesso!");
}