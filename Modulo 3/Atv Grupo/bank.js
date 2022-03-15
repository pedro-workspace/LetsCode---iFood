console.log("Loged in");


//Bank


class Bank {
    constructor(name, account, balance, passcode, cpf) {
        this.name = name;
        this.account = account;
        this.balance = balance;
        this.type = type;
        this.passcode = passcode;
        this.logui = [];
        this.limit = 5000;
        this.cpf = cpf
    }
    set Cpf(c) {
        this.cpf = c;
    }
    get Cpf() {
        return this.cpf;
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
        if(valor <= this.limit) {
            this.limit -= valor;
            this.balance = this.balance - valor;
            return "Emprestimo de " + valor + ' realizado.';
        }else{
            return 'Emprestimo indisponível';
        }
    }
}


class PJ extends Bank{
    constructor(name, account, balance, cnpj, passcode, limit = 20000) {
        super(name, account, balance, passcode);
        this.limit = limit;
        this.cnpj = cnpj;
    }
    set Cnpj(c) {
        this.cnpj = c;
    }
    get() {
        return this.cnpj
    } 
}

class PF extends Bank{
    constructor(name, account, balance, passcode, limit = 10000) {
        super(name, account, balance, passcode);
        this.limit = limit;
    }
    set Limit(limit) {
        this.limit = limit;
    }
    get Limit() {
        return this.limit;
    }
}