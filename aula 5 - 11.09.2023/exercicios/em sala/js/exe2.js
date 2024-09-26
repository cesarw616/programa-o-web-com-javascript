'use strict';

let tab = parseInt(prompt("Digite a tabuada: "));
for (let i=0; i <= 10; i++){
    console.log(`${tab} X${i} = ${tab * i}`);
}//são necessarios 3 condições para realizar o comando for. Sendo elas, o ponto de partida, o ponto maximo e o incremento ponto a ponto;

let cont = 0;
while (cont<=10){
    console.log(`${tab} X ${cont} = ${tab*cont}`);
    cont++;
}//é necessario criar a variavel de controle do ciclo antes de abri-lo. Utiliza-se while para laços onde não se sabe a quantidade de veze que será necessário rodar o codigo;

let i = 0;
for(;i<=10;){
    console.log(`${tab} X ${i} = ${tab*i}`);
    i++;
}//apenas utilizando a estrutura do while para o for, as note que é necessario declarar como vazios os espaços das condiçoes do for;

