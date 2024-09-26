'use strict';

let botao = document.getElementById('btn');
let saida = document.getElementById('saida');

function fatorial(){
    let num = Number(document.getElementById('num').value);
    let i = Number();
    for (i=num-1;i>0;i--){
        num = num*i
        saida.value = num
    }  
}

botao.addEventListener('click', fatorial);