`use strict`;

let nota1 = Number(prompt('Digite a nota 1: '));
let nota2 = Number(prompt('Digite a nota 2: '));
let nota3 = Number(prompt('Digite a nota 3: '));

let media = (nota1+nota2+nota3)/3;

console.log("A média é: ",+media.toFixed(2));