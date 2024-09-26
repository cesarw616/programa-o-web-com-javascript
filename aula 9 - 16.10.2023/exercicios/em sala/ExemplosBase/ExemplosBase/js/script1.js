let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d'); /*Aqui estou dizendo ao JS que vou usar o canvas com um modelo de duas dimensoes, o d em 2d tem que ser minusculo neste caso*/
let bolinha = {
    cor: 'red',
    x: Math.round(Math.random()*500),
    y: Math.round(Math.random()*500),
    raio: 20,
}/*definindo as propriedades do objeto 'bolinha*/

function desenhar(){
    ctx.clearRect(0,0,canvas.width,canvas.height); /*ctx=context; apaga a tela do canvas*/
    ctx.beginPath();/*começa a desenhar no canvas*/
    ctx.arc(bolinha.x, bolinha.y,bolinha.raio,0,2*Math.PI);/*usa as propriedades da bolinha para desenha-la na tela*/
    ctx.fillstyle = bolinha.cor;
    ctx.fill();
    ctx.closePath();
}

setInterval(desenhar,100);