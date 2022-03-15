console.log("Loged in");

class Tv {
    constructor (canal = 1, volume = 10, ligada){
        this.canal = canal;
        this.volume = volume;
        this.ligada = ligada;
    }
    get liga() {
        this.ligada = true;
        return "ligada";
    }
    get desliga(){
        this.ligada = false;
        return "desligada";
    }
    get canalup() {
        this.canal++;
        return "canal: " + this.canal;
    }
    get canaldown() {
        this.canal--;
        return "canal: " + this.canal;
    }
    get volup() {
        this.volume++;
        return "volume: " + this.volume;
    }
    get voldown() {
        this.volume--;
        return "volume: " + this.volume;
    }
}

const tv = new Tv();

console.log(tv.desliga);
console.log(tv.liga);
console.log(tv.canal);
console.log(tv.volume);
console.log(tv.volup);
console.log(tv.volup);
console.log(tv.voldown);
console.log(tv.canalup);
console.log(tv.canalup);
console.log(tv.canaldown);
console.log(tv.desliga);