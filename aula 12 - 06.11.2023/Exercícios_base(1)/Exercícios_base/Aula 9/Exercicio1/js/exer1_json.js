'use strict';
let base;
if (localStorage.getItem('base') !== null){
    base = JSON.parse(localStorage.getItem('base'));
}else{
    base = {
        dados: []
    };
}

document.getElementById('button1').addEventListener('click', cadastrarDados);
$('#button2').click(exibirDados);

function cadastrarDados(){
    base.dados.push({rgm: document.querySelector('#rgm').value,
                    nome: $('#nome').val(),
                    media: Number($('#media').val())});
    localStorage.setItem('base',JSON.stringify(base));
}

function exibirDados(){
    let tabela = "<table border='1'>";
    for (let i = 0; i < base.dados.length; i++){
        tabela += "<tr>"
        tabela += `<td>${base.dados[i].rgm}</td>`
        tabela += `<td>${base.dados[i].nome}</td>`
        tabela += `<td>${base.dados[i].media}</td>`
        tabela += `<td>${conceito(base.dados[i].media)}</td>`
        tabela += `</tr>`
    };
    tabela += '</table>';
    $('#relatorio').html(tabela);
}

function conceito(m){
    if (m>=6){
        return "<span class = 'aprovado'>APROVADO</span>";
    }else if (m<1){
        return "<span class = 'reprovado'>REPROVADO</span>";
    }else{
        return "<span class = 'exame'>AF</span>";
    }
}