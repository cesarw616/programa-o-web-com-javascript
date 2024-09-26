'use strict';

function soma(a,b){
    return a+b;
}

let r = soma(4,4);
alert(soma(5,25));
console.log(r);

let sub = (a,b) => { return a-b }
alert(sub(3,6));
/*maneiras diferentes de criar uma função, apenas atente-se que elas não devem interagir diretamente na parte visual*/