// Enunciado
// Faça uma classe Perfil que tem as seguintes informações: nome, avatar (foto de perfil) e tema. Utilize acessors (get/set) para garantir que o tema só pode ser "light" ou "dark" e que a foto de perfil deve ser uma url (iniciada com http ou https).
// Faça uma classe SmartWatch com a contagem dos passos diários de uma pessoa (pedômetro). Garanta utilizando acessors (get/set) que os passos apenas podem ser incrementados e um método resetOnMidnight() que reseta os passos para 0.
// Construa uma classe Veiculo que tem como propriedades rodas (1 a n), usaCombustivel (true/false), uma classe Carro (tipoDecombustivel: 'gasolina', 'álcool', 'flex') que herda de Veiculo e Bicicleta (infantil: true/false - tem que ter mais que 2 rodas) que também herda as características de Veiculo.






//PERFIL:

class Perfil{
    constructor(nome = '', avatar = '', tema = '') {
        this.nome = nome;
        this.avatar = avatar;
        this.tema = tema;
    }
    set Nome (nome) {
        this.nome = nome;
    }
    get Nome () {
        return this.nome;
    }
    set Avatar (url = '') {
        this.avatar = url
    }
    get Avatar() {
        if (this.avatar.substring(0, 4) == "http") {
            return this.avatar;
        }else{
            return "url inválida";
        }
    }
    set Tema(tema = '') {
        if (tema.toLowerCase() == "light" || tema.toLowerCase() == 'dark'){
            this.tema = tema;
        }else{
            this.tema = 'opção não disponível';
        }
    }
    get Tema() {
        return this.tema;
    }
}

const jose = new Perfil();

jose.Nome = "Jose";
jose.Avatar = "htp://jose.com";
jose.Tema = 'dark';

console.log(jose.Nome);
console.log(jose.Avatar);
console.log(jose.Tema);


console.log("========================");

//SmartWatch

class SmartWatch {
    constructor(passos = 0){
        this.passos = passos;
    }
    get Passo() {
        return this.passos++;
    }
    reset() {
        this.passos = 0;
        return this.passos;
    } 
}

const smart = new SmartWatch();
console.log(smart.Passo);
console.log(smart.Passo);
smart.reset();
console.log("reset");
console.log(smart.Passo);
console.log(smart.Passo);
console.log(smart.Passo);


console.log("==========================");


//Veículo:

class Veiculo{
    constructor(rodas = 1, combustível = false){
        this.rodas = rodas;
        this.combustível = combustível;
    }
    set setRodas(rodas) {
        this.rodas = rodas;
    }
    get getRodas() {
        if(this.rodas > 1){
            return "Rodas do veículo: " + this.rodas;
        }else{
            return "Número inadequado, escolhe de uma a mais rodas";
        }
    }
    set setComb(comb) {
        this.combustível = comb;
    }
    get getComb() {
        return this.combustível;
    }
}

let veiculo = new Veiculo(0, true);
console.log(veiculo);
console.log(veiculo.Rodas);
veiculo.Rodas = 2;
veiculo.Comb = false;
console.log(veiculo);
console.log(veiculo.Rodas);
console.log(veiculo.Comb);

console.log("==================");

class Carro extends Veiculo{
    constructor(rodas, combustível, gastype) {
        super(rodas, combustível);
        this.gastype = gastype;
    }
    set Gastype(gas) {
        this.gastype = gas;
    }
    get Gastype() {
        if(this.gastype.toLowerCase() == "gasolina" || this.gastype.toLowerCase() == 'álcool' || this.gastype.toLowerCase() == "flex") {
            return this.gastype;
        } else{
            return "Tipo de combustível não identificado";
        }
    }
}

let carro = new Carro();
console.log(carro);
carro.getRodas = 4;
carro.setComb = true;
carro.Gastype = 'oleo dísel';
console.log(carro.Gastype);
carro.Gastype = 'gasolina';
console.log('Corrigindo: ' + carro.Gastype);
console.log(carro);


console.log('=================')

class Bicicleta extends Veiculo{
    constructor(infantil = false, rodas = 2, combustível = true) {
        super(rodas, combustível);
        this.infantil = infantil;
    }
    set Infantil(infantil) {
        this.infantil = infantil;
    }
    get Infantil() {
        return this.infantil;
    }
    set Rodas(rodas) {
        this.rodas = rodas;
    }
    get Rodas() {
        if (this.rodas >= 2) {
            return this.rodas;
        }else{
            return "Tipo de bicicleta indisponível, escolha modelos de 2 ou mais rodas";
        }
    }
}

let bicicleta = new Bicicleta();

console.log(bicicleta);

bicicleta.Infantil = true;
bicicleta.Rodas = 1;
console.log(bicicleta.Rodas);
console.log(bicicleta.Infantil);
bicicleta.Rodas = 2;
console.log(bicicleta.Rodas);
bicicleta.setComb = false;
console.log(bicicleta.getComb);
console.log(bicicleta);
