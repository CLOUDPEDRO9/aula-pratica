/* Nome: Pedro Henrique de OLiveira Alves

2 – Faça a média de 10 número (entrada via teclado)
 e exiba o resultado.
*/
var teclado = require('prompt-sync')();
var numero01 = parseFloat(teclado("digite um numero "));
var numero02 = parseFloat(teclado("digite um numero "));
var numero03 = parseFloat(teclado("digite um numero "));
var numero04 = parseFloat(teclado("digite um numero "));
var numero05 = parseFloat(teclado("digite um numero "));
var numero06 = parseFloat(teclado("digite um numero "));
var numero07 = parseFloat(teclado("digite um numero "));
var numero08 = parseFloat(teclado("digite um numero "));
var numero09 = parseFloat(teclado("digite um numero "));
var numero10 = parseFloat(teclado("digite um numero "));
var media = (numero01 + numero02 + numero03 + numero04 + numero05
    + numero06 + numero07 + numero08 + numero09 + numero10) / 10;
console.log("A media de 10 numeros \u00E9 ".concat(media));
