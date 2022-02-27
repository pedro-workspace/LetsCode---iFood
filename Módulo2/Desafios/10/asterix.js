console.log("Loged in...");

let i = 10;

let asterix = '';
let oberix = '';

let li;
let ul;

for ( i = 11; i > 0; i -= 2 ) {
    asterix = "*".repeat(i);
    oberix = ".".repeat(((10-i)/2)+1);
    ul = document.getElementById("ul");
    li = document.createElement("li");
    li.appendChild(document.createTextNode(oberix, asterix, oberix));
    ul.appendChild(li);
    console.log(oberix, asterix, oberix);
}