'use strict';

let botao = document.getElementById('btn');
let resposta = document.getElementById('resposta');

function imposto_de_renda(){
    let salario = Number(document.getElementById('salario').value);

    if (salario<1434){resposta.value = salario}
    else if (salario>=1434 && salario<2150){resposta.value = salario*0.075}
    else if (salario>=2150 && salario<2866){resposta.value = salario*0.15}
    else if (salario<=2866 && salario<3582){resposta.value = salario*0.225}
    else {resposta.value = salario*0.275}
}

botao.addEventListener('click', imposto_de_renda);