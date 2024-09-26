'use strict'
let a=12;
let b=20;
let nome="Victor";
let cidade='São Paulo';
let pais=`Brasil`;
console.log('Nome:'+nome+
            '\nCidade:'+cidade+
            '\nPaís:'+pais+
            '\nA+B:'+(a+b));//criando um print utilizando as string
console.log(`Nome: ${nome}
Cidade: ${cidade}
País: ${pais}
A+B: ${(a+b)}`);//não é necessario usar a craze inversa na variavel, apenas no console.log(`${let}`)

let numero = parseInt(prompt("Digite um numero:"));//PROMPT permite que o usuario entre com um dado, e esta variavel será admitida como uma string. 

//let numero = Number(prompt("Digite um numero:"));

//let numero = +(prompt("Digite um numero:"));parseInt, Number e + serve para garantir que a variavel seja um Int
