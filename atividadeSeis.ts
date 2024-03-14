/*
Nome: Pedro Henrique de Oliveira Alves

*/

const teclado = require (`prompt-sync`)();

let idade: number = 0;
let salario: number = 0;
let totPessoasNaCondiçao:  number = 0;
let pessoasContabilizadas: number = 1;

while (pessoasContabilizadas <= 4){

idade = parseInt(teclado(`Digite a idade ${pessoasContabilizadas}: `));
salario = parseFloat(teclado(`Digite o salario do funcionário ${pessoasContabilizadas}: `));
console.log(``);

    if (idade < 30 && salario > 3000){
        totPessoasNaCondiçao++;
        pessoasContabilizadas++;
    }
    else{
        pessoasContabilizadas++;
   }
} 
console.log(``);
console.log(`O total de pessoas que atende a condição é ${totPessoasNaCondiçao}`);
