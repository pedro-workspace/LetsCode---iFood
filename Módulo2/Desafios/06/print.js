console.log("Loged in...");


let h4;

function printar(n) {
    n = document.getElementById('number').value;
    while (n != 0) {
        h4 = document.createElement("h4");
        h4.textContent = n + " ";
        document.body.appendChild(h4);
        console.log("Até aqui!");
        
    }
}