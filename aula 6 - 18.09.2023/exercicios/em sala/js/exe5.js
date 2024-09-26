'use strict';

function anima(){
    let posx = Math.round(Math.random()*800);
    let posy = Math.round(Math.random()*500);
    document.querySelector('#img').style.left = posx + 'px';
    document.querySelector('#img').style.top = posy + 'px';
}

setInterval(anima, 5000);