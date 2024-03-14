var teclado = require("prompt-sync")();
var idade = parseFloat(teclado("digite sua idade: "));
if (idade >= 18) {
    console.log("Maior de idade :)");
}
else {
    console.log("Menor de idade :(");
}
