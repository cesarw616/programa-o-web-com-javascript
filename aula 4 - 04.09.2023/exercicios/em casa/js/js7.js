'use script';

var num1 = parseInt(prompt('Digite um número inteiro: '));
var num2 = parseInt(prompt('Digite um segundo número inteiro: '));
var num3 = parseInt(prompt('Digite um terceiro número inteiro: '));

function soma (num1,num2,num3){
    return num1+num2+num3;
}/*quando eu declaro os valores que soma pode receber, eu deixo isso bloqueado, sendo assim eu não poderia utilizar essa função com outros objetos que não "num1","num2" e "num3"*/

console.log(soma(num1,num2,num3));/*os valores que precisam ser usados na função e impressos na ocasião tem que ser declarados dentro do 'print' (console.log no caso de JS), mas fique atento à informação do bloco acima, se a função estiver bloqueada para um grupo de parametros, só será possivel utilizar o grupo especificado por ela*/