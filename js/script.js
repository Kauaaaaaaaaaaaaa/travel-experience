const formulario = document.querySelector(#formcadastro);

formulario.addEventlistener("submit", function(event){
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const destino = document.querySelector(#destino).value;

    const mensagem = document.querySelector(#mensagem);

    mensagem.textContent =
        "olá, " + nome + "! Sua próxima aventura será em " + destino + "!";

        formulario.reset()
})
