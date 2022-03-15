console.log("Loged in");

let carro = {
    cor: "",
    marca: "",
    set setColor (cor) {
        this.cor = cor;
    },
    get getColor () {
        return this.cor;
    },
    set setMarca (marca) {
        this.marca = marca;
    },
    get getMarca () {
        return this.marca;
    }
}


carro.setColor = "Prata";
carro.setMarca = "Gol";

console.log("Teste de implementação: ");

console.log(carro.getColor);
console.log(carro.getMarca);