'use strict';
let resposta = document.getElementById('resposta');
const botao = document.getElementById('btn');

function area_triangulo(){
    let base = document.querySelector('#base').value;
    let altura = document.querySelector('#altura').value;
    resposta.innerHTML = (base*altura)/2;
}botao.addEventListener('click', area_triangulo);