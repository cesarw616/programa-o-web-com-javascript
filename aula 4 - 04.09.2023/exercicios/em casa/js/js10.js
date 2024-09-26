'use strict';

var degrau = Number(prompt('Digite a altura do degrau: '));
var escada = Number(prompt('Digite a altura final da escada: '));

function qtd_degraus(){
    return escada/degrau;
}

console.log(`Você precisará de ${qtd_degraus(escada,degrau)} degraus para completar a escada`);