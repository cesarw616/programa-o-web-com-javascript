'use strict'

let a = Number(prompt('Digite o número a: '));
let b = Number(prompt('Digite o número b: '));
let c = Number(prompt('Digite o número c: '));

let delta = (b**2)-(4*a*c);
let x1 = (-b + Math.sqrt(delta))/(2*a);
let x2 = (-b - Math.sqrt(delta))/(2*a);

console.log(`x1 = ${x1}`);
console.log(`x2 = ${x2}`);