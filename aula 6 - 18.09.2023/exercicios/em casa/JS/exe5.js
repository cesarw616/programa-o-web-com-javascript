'use strict';

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let inicial = 0;
let timer = 0;
let contImagem = 1;

btn1.addEventListener('click', function(){
    exibirDiv('divCronometro');
    if (timer == 0){
        timer = setInterval(funcCronometro,100);
    }
});

function funcCronometro(){
    inicial ++;
    document.getElementById('txtNum').innerHTML = inicial;
}

function exibirDiv(div){
    let tagDiv = document.querySelectorAll('div');
    for (let i=0;i<tagDiv.length;i++){
        if (tagDiv[i].id.indexOf('div')>=0){
            if (tagDiv[i].id == div){
                tagDiv[i].style.display = "flex";
            }else{
                tagDiv[i].style.display = "none";
            }
}}}

btn2.addEventListener('click', function(){
    exibirDiv('divSlide');
})

btn3.addEventListener('click', function(){
    exibirDiv('divTabuada');
})

document.getElementById('ant').addEventListener('click',function(){
    if (contImagem>1){
        contImagem --;
    }else{
        contImagem = 5;
    }
    document.querySelector('#imagens').src = `imagens/img${contImagem}.jpg`;
})

document.getElementById('prox').addEventListener('click',function(){
    if (contImagem<5){
        contImagem ++;
    }else{
        contImagem = 1;
    }
    document.querySelector('#imagens').src = `imagens/img${contImagem}.jpg`;
})

document.querySelector("#btntab").addEventListener('click',function(){
    let tab = Number(document.querySelector('#txtNumTab').value);
    let saida = document.querySelector("#restab");
    for (let i=0;i<=10;i++){
        saida.innerHTML += `${tab} x ${i} = ${tab*i}<br>`;
    }
})