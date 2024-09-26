'use strict';
/*aqui peguei a tag <select> usando seu id, e ordenei que recuperasse o valor da tag, ou seja, a opção selecionado*/
let total=0;

function taxa (){
    let parcela = parseInt(document.getElementById('parcelas').value);
    if (parcela==2){
        total=parcela*(3/100);
    }
    else if (parcela==4){
        total=parcela*(7/100);
    }
    else{total=parcela;}
document.getElementById('saida').innerHTML=total};

document.getElementById('btn').addEventListener('click', taxa);