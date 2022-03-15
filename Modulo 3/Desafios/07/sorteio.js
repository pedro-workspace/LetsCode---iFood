console.log("Loged in");

// Crie uma classe Sorteio que tem o número de pessoas inscritas e um método sorteiaPremio que sorteia um número que corresponderá ao número de inscrição do participante e declara o vencedor. 

class Sorteio{
    constructor(inscritos = [], id = 0){
        this.inscritos = inscritos;
        this.id = id;
    }
    get inscrições(){
        return this.inscritos;
    }
    set inscrever(inscrito) {
        this.inscritos.push(inscrito);
    }
    sortear(inscritos, id){
        inscritos = this.inscritos;
    }
}
