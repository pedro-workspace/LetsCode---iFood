console.log("Loged in...");

const carros = [
    {
        modelo: "Uno",
        ano: 2000,
        cor: "verde",
        situação: "usado"
    },
    {
        modelo: "Gol",
        ano: 2010,
        cor: "vermelho",
        situação: "novo"
    }
]

let usados = carros.filter(function(carro){
    return carro.situação == "usado";
});

console.table(carros);