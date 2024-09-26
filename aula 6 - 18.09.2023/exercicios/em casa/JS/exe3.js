'use strict';

document.getElementById('b1').addEventListener('click', function(){
    document.querySelector('#txt_texto').value = document.querySelector('#txt_texto').value.toUpperCase();
});

document.getElementById('b2').addEventListener('click', function(){
    let vet = document.getElementById('txt_texto').value.split(' ');
    for (let p of vet){
        document.getElementById('saida').innerHTML += p+'<br>';
    }
});