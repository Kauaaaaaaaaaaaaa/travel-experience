const botaoCriar = document.getElementById("botaoCriar");
const botaoApagar = document.getElementById("botaoApagar");
const retorno = document.getElementById("retorno");

botaoCriar.addEventListener("click", () => {
    retorno.textContent = "Hoje é um ótimo dia para aprender JS!";
});

botaoApagar.addEventListener("click", () => {
    retorno.textContent = ""
});