console.log("Loged in...");

//Cuidado a declarar variáveis. "let" não admite redeclaração

let init = 99;
let fi = 1;

while (init >= fi) {
    if (init % 2 == 1) {
        if (init != 1) {
            document.write(init, "  -  ");
        } else {
            document.write(init, ".");
        }
    }
    console.log("Até aqui");
    init--;
}
