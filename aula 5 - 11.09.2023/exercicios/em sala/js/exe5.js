'use strict';

let botao = document.getElementById("btn");
let resposta = document.querySelector("#resposta");

botao.addEventListener('click', function(){
    resposta.innerHTML = "";
    for(let i = 0; i<=10; i++){
        resposta.innerHTML += `2 x ${i} = ${2*i}<br>`;
    }
});