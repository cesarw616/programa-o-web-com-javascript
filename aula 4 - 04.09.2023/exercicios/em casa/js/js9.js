'use strict';

var nome = prompt('Digite seu nome: ');
var anoNascimento = Number(prompt('Digite o ano de seu nascimento: '));
var anoAtual = Number(prompt('Digite o ano atual: '));
function idade(anoNascimento,anoAtual){
    return anoAtual-anoNascimento;
}

console.log('Olá, ', nome,'bem vindo!\n','É difícil ter ',idade(anoNascimento,anoAtual), 'né?');