'use strict';

let num = parseInt(prompt('Digite um número: '));
let soma = num+num;
function pega(){
    return num+num;
}

console.log(+soma);
console.log(pega(num));