'use strict';

let btn1 = $('#btn1').click(carregarDados);
let btn2 = $('#btn2').click(exibirDados);
let alunos = [];


function Aluno (nome, rgm, media){
    this.nome = nome;
    this.rgm = rgm;
    this.media = media;
}

function carregarDados(){
    let aluno = new Aluno ($('#nome').val(), $('#rgm').val(), $('#media').val());
    alunos.push(aluno);
    localStorage.setItem('alunos',JSON.stringify(alunos));
}


function exibirDados(){
    let tabela = '<table border="1pt" id="tab">';
    for (let i = 0; i < alunos.length; i++){
        tabela += '<tr>'
        tabela += `<td>${alunos[i].nome}</td>`
        tabela += `<td>${alunos[i].rgm}</td>`
        tabela += `<td>${alunos[i].media}</td>`
        tabela += `<td class="conceito">${conceito(alunos[i].media)}</td>`
        tabela += `</tr>`}
    tabela += `</table>`
    $('#tabela').html(tabela);
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