console.log("Loged in...");

let carros = [];

function cadastro (carro) {
    carro = {
        modelo: document.getElementById("modelo").value,
        cor: document.getElementById("cor").value,
        ano: document.getElementById("ano").value,
        situação: document.getElementById("situação").value,
    }
    carros.push(carro);
    console.table(carros);
}
