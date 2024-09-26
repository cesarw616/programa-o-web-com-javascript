$('#button1').click(gravarDados);
$('#button2').click(carregarDados);
$('#button3').click(apagarDados);


function gravarDados(){
    localStorage.setItem('rgm',$('#rgm').val());
    localStorage.setItem('nome',$('#nome').val());
    localStorage.setItem('profissao',$('#profissao').val());
    localStorage.setItem('cpf',$('#cpf').val());
}

function carregarDados(){
    $('#rgm').val(localStorage.getItem('rgm'));
    $('#nome').val(localStorage.getItem('nome'));
    $('#profissao').val(localStorage.getItem('profissao'));
    $('#cpf').val(localStorage.getItem('cpf'));
}

function apagarDados(){
    localStorage.clear();
}