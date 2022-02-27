console.log("Loged in...");

let carros = [];

function cadastrar (carro) {
    carro = document.getElementById("carro").value;
    carros.push(carro);
    console.log("Cadastro");
    document.getElementById("quant").innerHTML = carros.length;

    var ul = document.getElementById("ul");
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(carro));
    ul.appendChild(li);
}


console.log(carros);