'use strict';

let nomes = [];
let rgms = [];
let parciais = [];
let exercicios = [];
let projetos = [];
let regimentais = [];

document.getElementById('btn1').addEventListener('click', function(){
    nomes.push(document.getElementById('nome').value);
    rgms.push(document.getElementById('nome').value);
    parciais.push(document.getElementById('nome').value);
    exercicios.push(Number(document.getElementById('nome').value));
    projetos.push(Number(document.getElementById('nome').value));
    regimentais.push(Number(document.getElementById('nome').value));
});

document.getElementById('btn2').addEventListener('click', function(){
    let tabela = '<table border = "1">';
    for (let i=1;i<nomes.length;i++){
        tabela += `<tr>
                    <td>${nomes[i]}</td>
                    <td>${rgms[i]}</td>
                    <td>${parciais[i]}</td>
                    <td>${exercicios[i]}</td>
                    <td>${projetos[i]}</td>
                    <td>${regimentais[i]}</td>
                    <td>${(((parciais[i]+exercicios[i]+projetos[i]+regimentais[i])/4)>=6)?'APROVADO':(((parciais[i]+exercicios[i]+projetos[i]+regimentais[i])/4)>3)?'EXAME':'REPROVADO'}`;
                    
    }
});