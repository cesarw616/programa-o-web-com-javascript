'use strict';
let lista_nomes = [];
montar_lista()

function montar_lista(){
    while (true){
        var nome = prompt('Digite o nome a ser adicionado: ');    
        if (nome == null){break}
        if (nome.length>0){
            lista_nomes.push(nome);
        }else {
            alert('Preencha o campo!')
        }
}}

montar_tabela() /* para chamar uma funcao nao é necessario usar um botao, pode chamar diretamente*/
function montar_tabela (){
    let tabela = '<table class="tabela">';
    for (let i=0;i<lista_nomes.length;i++){
        tabela += `<tr>
                        <td>${i+1}</td>
                        <td>${lista_nomes[i]}</td>
                    </tr>` /*é preferivel usar a crase para fazer output de informacoes pois com ela é possivel fazer ainsercao simultanea de texto e funcoes de forma mais facil*/
    }
    tabela += '</table>';
    document.getElementById('saida').innerHTML = tabela;
}

