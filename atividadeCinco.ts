/*
Nome: Pedro Henrique de Oliveri Alves

*/

const teclado = require (`prompt-sync`)();

let idade: number = parseFloat(teclado(`digite sua idade: `));

if (idade >= 18){
    console.log(`Maior de idade :)`);
}
else{
    console.log(`Menor de idade :(`);
}