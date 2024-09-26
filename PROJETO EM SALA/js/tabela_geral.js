let fii_user = [];
let fii_table = [];

async function carregarDadosUser(url){
    await fetch(url)
            .then(resp => resp.json())
            .then(json => fii_user = json);
    carregarDadosFundos();
}

async function carregarDadosFundos(){
    
    for (let fii of fii_user){
        let json = await fetch(`http://dwebkit-api.tk/api/${fii.nome}`)
                        .then(resp => resp.json());
        fii_table.push(json);  
    }
     

    exibirTabela();
}

carregarDadosUser("json/fii.json");

function exibirTabela(){ 
    let tabela = '<tr>';
    let total_geral = 0;
    let total_cotas = 0;
    let total_investido = 0;
    for (let i = 0; i < fii_table.length; i++){
        tabela += `<td>${fii_table[i].fundo}</td>`
        tabela += `<td>${fii_table[i].setor}</td>`
        tabela += `<td>${fii_table[i].proximoRendimento.cotaBase}</td>`
        tabela += `<td>${fii_table[i].dataPag}</td>`
        tabela += `<td class="${pintar_tabela}">${prox_pagamento}</td>`
        tabela += `<td>${fii_table[i].valorAtual}</td>`
        tabela += `<td>${fii_user[fii_table[i].qtde]}</td>`
        tabela += `<td>${fii_user[fii_table[i].totalgasto]}</td>`
        tabela += `<td>${Number(fii_user[fii_table[i].totalgasto])/Number(fii_user[fii_table[i].qtde])}</td>`
        tabela += `<td>${(Number(fii_table[i].proximoRendimento.cotaBase)*100)/Number(fii_table[i].valorAtual)}</td>`
        tabela += `<td>${fii_table[i].rendimentoMedio24M}</td>`

        total_geral += (Number(fii_table[i].proximoRendimento.rendimento))*(Number(fii_user[fii_table[i].qtde]));

        total_cotas += Number(fii_user[fii_table[i].qtde]);
        
        total_investido += Number(fii_user[fii_table[i].totalgasto]);
        }
    tabela += `</tr>`;
    tabela+= `<tr>`;
    tabela+= `<td>Total Geral</td>`;
    tabela+= `<td>R$${total_geral}</td>`;
    tabela+= `<td>R$${total_cotas}</td>`;
    tabela+= `<td>R$${total_investido}</td>`;
    tabela+= `<td>Total Geral</td>`;
    tabela+= `</tr>`;
    document.getElementById('tabela').innerHTML = tabela;
}

function pintar_tabela(){
    for (let i = 0; i < fii_table.length; i++){
        let rendimento = Number(fii_user[fii_table[i].totalgasto])/Number(fii_user[fii_table[i].qtde]);
        if (rendimento<0.6){
            return ".negativo"
        }else{
            return ".positivo"
        }
    }
}

function prox_pagamento(){
    let pagamento = Number(fii_table[i].proximoRendimento.rendimento);
    if (pagamento==0){
        return fii_table[i].ultimoRendimento.rendimento
    }else{return fii_table[i].proximoRendimento.rendimento}
}