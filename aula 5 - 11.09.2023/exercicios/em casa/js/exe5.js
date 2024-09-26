'use strict';

const botao = document.getElementById('btn');
let saida = document.getElementById('resultado');


function resultado(){
    let n1 = Number(document.getElementById('a1').value);
    let n2 = Number(document.getElementById('a2').value);
    let media = parseInt(((n1+n2)/2));
    if (media<3){saida.innerHTML = 'REPROVADO';}
    else if (media <= 6){saida.innerHTML = 'EXAME'}
    else{saida.innerHTML = 'APROVADO';}
}

botao.addEventListener('click', resultado);