'use strict';

let botao = document.getElementById('btn');
let saida = document.getElementById('saida');

function calc(){
    let prod = Number(document.getElementById('prod').value);
    let forma = Number(document.getElementById('forma').value);
    switch(forma){
        case (1):saida.innerHTML = prod-(prod*0.1);break;
        case (2):saida.innerHTML = prod-(prod*0.05);break;
        case (3):saida.innerHTML = prod+(prod*0.1);
    }
}

botao.addEventListener('click', calc);