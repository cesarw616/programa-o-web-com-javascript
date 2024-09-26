'use strict';
export let user = {
    nome: 'admin',
    data: '16/10/2023',
}

export let titulo = '';
export function setTitulo(t){
    titulo = t;
}

export function getTitulo(){
    return titulo;
}

/*para que otros desenvolvedores, e até mesmo o criador do módulo possam importar o mesmo para dentro de seus codigos, é necessario utilizar o termo 'export' antes de cada uma das funções do modulo*/