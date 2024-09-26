'use strict';

document.getElementById('btn').addEventListener('click', function(){
    let nom = document.getElementById('txt').value;
    console.log(nom);
    inverterString(nom);
    inserirSimbolo(nom,'*');
})

function inverterString(str){
    let saida = '';
    for (let i = str.length - 1; i>=0;i--){
        saida += str[i].toUpperCase();
    }
    console.log(saida);
}

function inserirSimbolo(str,simbolo){
    let saida = '';
    for (let i = 0; i<str.length-1;i++){
        saida += str[i] + simbolo;
    }
    saida+= str[str.length-1];
    console.log(saida);
}