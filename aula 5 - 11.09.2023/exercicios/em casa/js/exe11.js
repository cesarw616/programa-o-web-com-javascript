'use strict';

let num = parseInt(prompt('Digite um número N: '));
let i = Number();

for (i=num-1;i>0;i--){
    num=num+i;
}
document.getElementById('saida').innerHTML = num;