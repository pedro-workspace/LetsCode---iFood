console.log("Loged in");


//Bank


class Bank {
    constructor(name, account, balance, passcode) {
        this.name = name;
        this.account = account;
        this.balance = balance;
        this.type = type;
        this.passcode = passcode;
        this.logui = [];
        this.limite = 5000;
    }
    get Balance() {
        if (this.passcode = 'passcode'){
            return this.balance;
        }else{
            return 'Senha incorreta';
        }
    }
    get Name() {
        return this.name;
    }
    get Type() {
        return this.type;
    }
    saque = (valor) => {
        
        if (valor <= this.balance){
            this.balance -= valor;
            this.logui.push(-valor);
            return "Valor retirado: -" + valor;
        }else{
            return "Valor indisponível";
        }
    }
    deposito = (valor) => {
        this.balance += valor;
        return "valor adicionado com sucesso: +" + valor;
    }
    extrato = () => {
        for(var i = 0;i < this.logui.length();i++) {
            console.log(this.logui[i]);
        }
    }
    emprestimo = (valor) => {
        if(valor <= this.limite) {
            this.balance = this.balance - valor;
            return "Emprestimo de " + valor + ' realizado.';
        }else{
            return 'Emprestimo indisponível';
        }
    }
}


class PJ extends Bank{
    constructor(name, account, balance, passcode, limit) {
        super(name, account, balance, passcode);
        this.limit = limit;
    }
    get Limit() {

    }

}