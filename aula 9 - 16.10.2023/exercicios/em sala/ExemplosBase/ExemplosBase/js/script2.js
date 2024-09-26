'use strict';

let pessoa1 = {
    nome:'Fulano da Silva Santos',
    altura: 1.5,
    idade: 45,
}

let pessoa2 = {
    nome: 'Victor Danna',
    altura: 1.8,
    idade: 24,
}/*a desvantagem desse modelo é que sempre que quiser adicionar uma pessoa, eu tenho que gerar um novo bloco desse*/

let pessoas = [pessoa1, pessoa2];
let campo = document.getElementById('rel_pessoas');
for (let p of pessoas){
    campo.innerHTML += `<h1>${p.nome}</h1>`;
}

