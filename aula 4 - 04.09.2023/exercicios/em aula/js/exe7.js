/*Uma empresa ira dar 25% de aumento para todos os
funcionarios, voce devera desenvolver um programa
que leia o salario atual do funcionario. Apos a
leitura, calcule e mostre na propria pagina o salario
com o aumento de 25%*/

let salario = parseFloat(prompt('Digite seu salário atual: '))
let aumento = (salario*0.25);
salarioNovo = salario+aumento;
alert(`Você receberá um aumento de R$ ${aumento} \ne seu novo salário será de R$ ${salarioNovo}`)

