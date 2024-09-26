'use strict';

document.querySelector('#btn1').addEventListener('click', function(){
    let linhas = Number(document,querySelector('#qtdlinhas').value);
    let colunas = Number(document,querySelector('#qtdcolunas').value);
    
    let conteudo = '<table>';
    for (let i=1;i<linhas;i++){
        conteudo += '<tr>';
        for (let j=1;j<colunas;j++){
            conteudo += `<td class = "${(j%2==0)?'par':'impar'}>${i},${j}</td>`;
        }
        conteudo += '</tr>';
    }
    conteudo += '</table>';
    document.querySelector('#saida').innerHTML = conteudo;
})