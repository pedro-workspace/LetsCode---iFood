console.log("Loged in");

class CNH{
    constructor(pais = '', idade = 0, categoria = ''){
        this.pais = pais;
        this.idade = idade;
        this.categoria = categoria
    }
    set setcategoria(c){
        this.categoria = c;
    }
    get getcategoria() {
        if (this.pais == "BR"){
            return "Categoria " + this.categoria;
        }else{
            return "";
        }
    }
    set setpais(p){
        this.pais = p;
    }
    get getpais(){
        if(this.pais == '') {
            return "Por favor, insira um país";
        } else if(this.pais == 'BR') {
            return this.pais + ", categoria aplicável";
        } else {
            return this.pais + ", não precisa de categoria";
        }
    }
    set setidade(i) {
        this.idade = i;
    }
    get getidade(){
        if(this.pais == 'CH'|| this.pais == "RU" && this.idade >= 21){
            return this.idade + ", apto para registro";
        }else if (this.idade >= 18) {
            return this.idade + ", apto para registro";
        }else if(this.pais == "US" || this.pais == "CA" && this.idade >= 16) {

        } else {
            return 'Idade inapropriada';
        }
    }
}

console.log(`Escolha a sigla de seu país \n
                    BR - Brasil - categorias:[A, B, C, D, E, AB, AC, AD ou AE]
                    US - Estados Unidos
                    RU - Russia
                    CH - China
                    CA - Canadá
                    `);

const joao = new CNH('RU', 19, "B");

console.log(joao.getpais);
console.log(joao.getidade);
console.log(joao.getcategoria);
