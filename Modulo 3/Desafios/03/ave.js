console.log("Loged in");


let Ave = {
    especie: "Quero-quero",
    getEspecie() {
        return this.especie;
    },
    
}

console.log(Ave.getEspecie());

let Peixe = {
    nome: "Pexin",
    especie: "peixe-dourado",
    getEspecie: function() {
        return this.especie;
    }
}

let especiePeixe = Peixe.getEspecie.bind(Peixe);
console.log(especiePeixe());