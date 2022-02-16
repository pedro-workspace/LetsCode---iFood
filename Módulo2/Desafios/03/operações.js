console.log('Loged in...');

function opera(n1, n2) {
    n1 = parseInt(document.getElementById("n1").value);
    n2 = parseInt(document.getElementById('n2').value);
    let ope = document.getElementById('arit').value;
    console.log(ope)
    let result = 0;
    switch (ope){
        
        case "+":
            result = n1 + n2;
            document.getElementById("result").value = result;
            break;

        case "-":
            result = n1 - n2;
            document.getElementById("result").value = result;
            break;

        case "*":
            result = n1 * n2;
            document.getElementById("result").value = result;
            break;

        case "/":
            result = n1 / n2;
            document.getElementById("result").value = result;
            break;

        case "%":
            result = n1 % n2;
            document.getElementById("result").value = result;
            break;

    }
}
