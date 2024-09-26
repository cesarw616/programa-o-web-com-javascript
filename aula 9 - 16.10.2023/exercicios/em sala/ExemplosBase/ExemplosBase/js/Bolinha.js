'use strict';

export class Bolinha{
    constructor(cor,x,y,raio){
        this.cor = cor;
        this.x = x;
        this.y = y;
        this.raio = raio;
    }

    get bCor() {return this.cor;}
    set bCor(v) {this.cor = v;}
}
