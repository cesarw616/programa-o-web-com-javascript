'use strict';
let livros = [];
function lerDados(url){
    fetch(url)
        .then( (resp) => resp.json())
        .then( (json) => livros = json.registros)
}

lerDados("dados/biblioteca.json");

$("#btn1").click(function(){
    let str_pesq = $('#pesq').val().toUpperCase();
    let tipo_pesq = $('#tipo').val();
    pesquisar(str_pesq, tipo_pesq);
});

function pesquisar(str,tipo){
    $('#resultado').html('');
    for (let livro of livros){
        switch(tipo){
            case '1': if (livro.titulo.toUpperCase().indexOf(str) >= 0){ /*busca aproximada*/
                montaLivro(livro);
            }
                break;
            case '2': if (livro.classificacao.toUpperCase() == str){/*busca exata*/
                montaLivro(livro);
            }
                break;
        }}}

function montaLivro(livro){
    let autores = '';
    for (let autor of livro.autores){
        autores += autor.nome + '<br>';
    }
    $('#resultado').append(`<article>
                            <div>
                            <img src = '${livro.capa}'>
                            <strong>Título: ${livro.titulo}</strong>
                            <strong>Autor(es): </strong><br>
                            ${autores}
                            </div>
                           </article>`)
}