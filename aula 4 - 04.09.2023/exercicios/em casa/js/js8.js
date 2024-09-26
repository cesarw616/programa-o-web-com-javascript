'use strict';

var base = Number(prompt('Digite o valor da base do triangulo: '));
var altura = Number(prompt('Digite o valor da altura od triangulo: '));

function area(base,altura){
    return (base*altura)/2;
}

console.log(area(base,altura));