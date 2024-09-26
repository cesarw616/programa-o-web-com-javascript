'use strict';
let resposta=document.getElementById('saida');
function par_ou_impar(){
    let n = document.getElementById('num').value;
    if (n%2==0){resposta.value = n + ' é par'}
    else {resposta.value = n + ' é ímpar'}
}

document.getElementById('btn').addEventListener('click', par_ou_impar);