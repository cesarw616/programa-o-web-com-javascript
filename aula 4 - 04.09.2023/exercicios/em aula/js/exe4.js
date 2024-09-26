'use strict'
var a=12;
let b=20;
console.log(a);
console.log(b);
a=20;
b=30;
var a=1000;//note que é possivel re-declarar a var a quando utilizamos o var
// let b=1000; - não funciona. Já utilizando a declaração let, não é possivel cometer esse erro
const PI=3.14; //uma vez definida a constante, não é mais possivel alterar o valor dela em nenhuma outra parte do codigo
if(PI<5){
    var r=999;
    let s=333;
    console.log(a);
    console.log(b);
    console.log(r);
    console.log(s);
}
console.log(r);
//console.log(s); - não funcinoa. Utilizando o let é possivel criar uma variavel de escopo local, enquanto com o var a variavel vai ser sempre global. Portanto, a varivel criada com let "morre" dentro das chaves.
