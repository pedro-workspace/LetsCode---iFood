console.log('Loged in...');

function opera(n1, n2) {
    n1 = parseInt(document.getElementById("n1").value);
    n2 = parseInt(document.getElementById('n2').value);
    let ope = document.getElementById('arit').value;
    console.log(ope)
    let result = 0;
    switch (ope){
        
        case "mais":
            result = n1 + n2;
            document.getElementById("result").value = result;
            break;

        case "menos":
            result = n1 - n2;
            document.getElementById("result").value = result;
            break;

        case "multiplicação":
            result = n1 * n2;
            document.getElementById("result").value = result;
            break;

        case "divisão":
            result = n1 / n2;
            document.getElementById("result").value = result;
            break;

        case "mod":
            result = n1 % n2;
            document.getElementById("result").value = result;
            break;

    }
}
