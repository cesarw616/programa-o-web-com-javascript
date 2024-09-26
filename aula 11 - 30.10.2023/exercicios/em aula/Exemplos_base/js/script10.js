let url = "json/alunos.json";

fetch(url)
    .then( (resp) => resp.json())
    .then( function(data){
        let div = document.querySelector('#lista');
        div.innerHTML = '';
        let alunos = data.alunos;
        alunos.forEach(function(aluno){
            div.innerHTML += `${aluno.nome}<br>`            
        });
    })