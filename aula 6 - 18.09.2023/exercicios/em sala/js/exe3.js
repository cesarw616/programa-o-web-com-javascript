'use strict';

let div1 = document.querySelector('#box1');
let div2 = document.querySelector('#box2');

div1.addEventListener('click', tratarEventos);
div1.addEventListener('dblclick', tratarEventos);

div2.addEventListener('mouseover',tratarEventos);
div2.addEventListener('mouseout',tratarEventos);
div2.addEventListener('mousedown',tratarEventos);
div2.addEventListener('mouseup',tratarEventos);
div2.addEventListener('mousemove',tratarEventos);

function tratarEventos(event){
    switch (event.type){
        case 'click' : div1.style.backgroundColor = 'red'; break;
        case 'dblclick' : div1.style.backgroundColor = 'blue'; break;
        case 'mouseover' : div2.style.backgroundColor = 'orange'; break;
        case 'mouseout' : div2.style.backgroundColor = 'green'; break;
        case 'mousedown' : div2.style.backgroundColor = 'pink'; break;
        case 'mouseup' : div2.style.backgroundColor = 'grey'; break;
        case 'mousemove' : div2.innerHTML = `${event.clientX},${event.clientY}`
        

    }   
}