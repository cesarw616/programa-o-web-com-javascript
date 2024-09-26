'use strict';

let btn = document.getElementById('btn');
let saida = document.getElementById('saida');
var imc = Number();
function calc(){
    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value);
    imc = peso/altura**2;
    return imc;
}



function resultado(){
    let genero = document.getElementById('gen');
    if (genero == 'F' || genero == 'f'){
        if (imc <= 19.1){saida.value = 'Abaixo do peso'}
        else if (im<19.1 && imc<=25.8){
            saida.value = 'Peso normal'}
        else if (imc>25.8 && imc<=27.3){
            saida.value = 'Pouco sobrepeso'}
        else if (imc>27.3 && imc<=32.3){
            saida.value = 'Acima do peso'}
        else{saida.value = 'Obesa'}
    }
    else{
        if (imc <= 20.7){saida.value = 'Abaixo do peso'}
        else if (imc<20.7 && imc<=26.4){
            saida.value = 'Peso normal'}
        else if (imc>26.4 && imc<=27.8){
            saida.value = 'Pouco sobrepeso'}
        else if (imc>27.8 && imc<=31.1){
            saida.value = 'Acima do peso'}
        else{saida.value = 'Obeso'}
    }
}
btn.addEventListener('mouseover', calc);
btn.addEventListener('click', resultado);