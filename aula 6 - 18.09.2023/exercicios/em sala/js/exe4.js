'use strict';

let frutas = []; //[] ou newArray para chamar o vetor;
frutas[0] = 'moranga';
frutas[1] = 'uva';
frutas[2] = 'manga';

console.log(frutas);
frutas.push('pera');
console.log(frutas);
console.log(frutas[1]);

let meses = ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];

let dataHora = new Date();
alert(meses[dataHora.getMonth()]);

for(let i = 1; i< meses.length; i++){
    console.log(meses[i]);
}

//for ... of
/*/for (let mes of meses){
    console.log(mes);
}*/

//forEach
/*meses.forEach(alert);*/

meses.forEach((mes,index)=>{
    console.log(`${index+1} - ${mes}`);
});

