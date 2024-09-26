' use strict';
let url = "dados/receita_federal.xml";
let div = document.getElementById('cards');

fetch(url)
    .then( (resp) => resp.text()) /* resposta = texto do xml. Quando ele retorna o texto do arquivo, converte para .txt*/
    .then( (str) => (new DOMParser().parseFromString(str, "text/xml")))/*aqui converte de texto para documento XML, que pode ser lido*/
    .then( function (dados){
        console.log(dados);
        let pessoas = dados.querySelectorAll('contribuinte');
        div.innerHTML = '';
        for (let pessoa of pessoas){
            montaCard(pessoa);
        }
})

function montaCard(p){
    div.innerHTML += `<div class = 'card'>
                        <img src = '${p.childNodes[7].childNodes[0].nodeValue}'>
                        <h3> ${p.childNodes[2].childNodes[0].nodeValue}</h3>
                        <p>${p.childNodes[2].childNodes[0].nodeValue}</p>
                        <div class = 'contato'> ${p.childNodes[5].childNodes[2].innerHTML}
                     </div>`
}