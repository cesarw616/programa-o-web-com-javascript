let url = "xml/menu.xml";
$.ajax(url)
    .done(function (xml) {
        console.log(xml);
        $(xml).find('opcao').each(function(){
            $('#menu').append(`${$(this).attr('id')} - ${$(this).text()}<br>`)});
    })
    .fail(function () {
        alert("Ocorreu um erro no carregamento");
    });