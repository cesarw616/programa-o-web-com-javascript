'use strict';

let resp = document.querySelector('.resp');
const btn = document.querySelector('#btn');

function maior_menor(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    if (n1<n2){resp.innerHTML = n2 + ' é o maior'}
    else if (n1==n2){resp.innerHTML = n1 + ' e ' + n2 + ' são iguais'}
    else {resp.innerHTML = n1 + ' é o maior'}
}
btn.addEventListener('click', maior_menor);