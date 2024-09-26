'use strict';

class Pessoa{
    constructor(nome,idade,altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    toString(){
        return `${this.nome},${this.idade},${this.altura}`
    }
}