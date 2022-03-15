// 11. Crie uma classe Restaurante com as propriedades cidade, delivery (verdadeiro ou falso), pedidosPendentes e tempo de entrega estimado (calculado com base nos pedidos pendentes, sendo 10 + 2 * pedidosPendentes em minutos). Os restaurantes devem ser capazes de realizar entregas desde que o cliente esteja localizado na mesma cidade e, para isso, precisamos de um método entregaPedido que devolve como resultado se é possível realizar a entrega para um determinado cliente ou não e, em caso positivo, o tempo estimado de entrega. 


class Restaurante{
    constructor(cidade, delivery, pendentes, tempo){
        this.cidade = cidade;
        this.delivery = delivery;
        this.pendentes = 0;
        this.tempo = tempo;
    }
    set cidade(cidade) {
        this.cidade = cidade;
    }
    get cidade() {
        return this.cidade;
    }
    set delivery(delivery){
        this.delivery = delivery;
    }
    get pendentes(){
        return this.pendentes;
    }
    pedir(delivery, pendentes, localrest, tempo){
        //uma call de pedido. fazer tudo com calma depois
        localrest = "Salvador";
        this.pendentes++;
        if(delivery==true && this.cidade==localrest) {
            tempo = 10 + 2 * this.pendentes;
            return `Temos ${this.pendentes} pedidos na sua frente, aguarde por ${tempo}`;
        }else{
            return `Não realizamos entrega neste local ainda`
        }
    }
}

const churrasquin = new Restaurante("Salvador", );
