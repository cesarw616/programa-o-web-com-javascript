'use strict';

let num_usuario = parseInt(-1);
let num_sorte = Math.round(Math.random()*100);
console.log(num_sorte);

function jogo(){
    while (num_usuario != num_sorte){
    num_usuario = parseInt(prompt('Qual o número da sorte?'));
}}

document.getElementById('btn').addEventListener('click',jogo);
