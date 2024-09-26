'use strict';

let qtd_m = 0;
let qtd_f = 0;
let soma_a_m = 0;
let soma_a_f = 0;

document.querySelector("#btn1").addEventListener("click", function(){
    let gen = document.querySelector("#genero").value; /*pega o valor do campo selecionado na tag genero*/
    let alt = Number(document.querySelector("#altura").value);/*pega o valor no campo altura*/
    if (gen == 0){
        qtd_m ++;
        soma_a_m += alt;
    } else{
        qtd_f ++;
        soma_a_f += alt;
    }
})
document.querySelector("#btn2").addEventListener("click", function(){
    exibirDados();
})

document.querySelector("#btn3").addEventListener("click", function(){
    exibirMedia();
})

function exibirDados(){
    document.querySelector("#qtd_m").innerHTML = qtd_m; /*aqui se utiliza o innerHTML para inserir a informação dentro da tag HTML*/
    document.querySelector("#qtd_f").innerHTML = qtd_f;
}

let exibirMedia = () => {
    document.querySelector("#media_m").value = soma_a_m/qtd_m; /*utilizar .value para inserir a informação dentro do campo do formulario*/
    document.querySelector("#media_f").value = soma_a_f/qtd_f;
}

