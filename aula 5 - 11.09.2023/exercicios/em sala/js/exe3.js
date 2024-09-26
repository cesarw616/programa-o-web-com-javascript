'use strict';
/* faça um codigo para ler varios numeros inteiros, ao final da leitura, apresente a soma destes numeros. O usuario irá finalizar a leitura com o valor 0*/

let soma = 0;
while(true){
    let num = Number(prompt("Digite um numero: "));
    if (num == 0){
        break;
    }
    soma += num;
}

alert(soma);