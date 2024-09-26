'use strict';

let media = Number(prompt("Digite a sua média: "));

if(media>10 || media<0){
    alert("INVÁLIDA");
}
else{
    if (media >= 5.75){
        alert("APROVADO");
    }
    else{
        alert("REPROVADO");
    }
}

let x = 100;
let resp = (x%2 == 0)? "par":"impar"; //o simbolo de ? serve para indicar a parte verdadeira: SE for verdade, execute o que está imediatamente após o ?, e o simbolo : serve para indicar a parte negativa, ou seja, SE NÃO for verdaed, execute o  que eesta imediatamente após o :;

let obj_data = new Date();
const dia_semana = obj_data.getDay();

switch (dia_semana){
    case 0: alert("DOINGO");break;
    case 1: alert("SEGUNDA");break;
    case 2: alert("TERÇA");break;
    case 3: alert("QUARTA");break;
    case 4: alert("QUINTA");break;
    case 5: alert("SEXTA");break;
    case 6: alert("SÁBADO");
} // o switch case só serve para comparações diretasde igualdade. Como no exemplo acima, onde ele irá comparar o valor retornado de dia_semana com os casos sespecificados, se houvesse mais de uma comparação para cada resultado já não serviria;

