'use strict';

let btn_soma = document.getElementById('soma');
let btn_sub = document.getElementById('sub');
let btn_multi = document.getElementById('multi');
let btn_div = document.getElementById('div');
let resposta = document.getElementById('resp');

function soma(){
    let num_1 = Number(document.getElementById('num_1').value);
    let num_2 = Number(document.getElementById('num_2').value);
    resposta.value = num_1+num_2; /*por ser um formulario, utilizamos .value,
    se fosse um campo de tag em branco, utilizariamos .innerHTML*/
    
}

function subtracao(){
    let num_1 = Number(document.getElementById('num_1').value);
    let num_2 = Number(document.getElementById('num_2').value);
    resposta.value = num_1-num_2;
}

function multiplicacao(){
    let num_1 = Number(document.getElementById('num_1').value);
    let num_2 = Number(document.getElementById('num_2').value);
    resposta.value = num_1*num_2;
}

function divisao(){
    let num_1 = Number(document.getElementById('num_1').value);
    let num_2 = Number(document.getElementById('num_2').value);
    resposta.value = num_1/num_2;
}

btn_soma.addEventListener('click', soma);
btn_sub.addEventListener('click', subtracao);
btn_multi.addEventListener('click', multiplicacao);
btn_div.addEventListener('click', divisao);