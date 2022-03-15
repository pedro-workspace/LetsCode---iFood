console.log("Loged in");

class Curso{
    constructor(nome, p1, p2){
        this.nome = nome;
        this.p1 = p1;
        this.p2 = p2;
        this.media = (this.p1 + this.p2)/2;
    }
    /**
     * @param {string} nome
     */
    set setnome(nome){
        this.nome = nome;
    }
    set setp1(p1){
        this.p1 = p1;
    }
    set setp2(p2){
        this.p2 = p2;
    }
    get getmedia(){
        if(this.p1 > 0) {
            return "Média: " + (this.p1 + this.p2)/2;
        }
        if(this.p1 == 0){
            return "A nota da p1 foi 0, não vai ser possível fazer uma média";
        }
    }
}

const poo = new Curso();
poo.nome = 'POO'
poo.p1 = 0;
poo.p2 = 10;
console.log(poo.getmedia);

const poo2 = new Curso();
poo2.nome = "POO2";
poo2.p1 = 8;
poo2.p2 = 9;
console.log(poo2.getmedia);