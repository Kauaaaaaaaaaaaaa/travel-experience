const formEstilo = document.getElementById("formEstilo");
const campoCor = document.getElementById("campoCor"):
const campoPadding = document.getElementById("campoPadding");
const campoTamanho = document.getElementById("campoTamanho");
const retorno = document.getElementById("retorno");

function aplicarEstilo(event){
    event.preventDefault();

    retorno.style.color = campoCor.value;
    retorno.style.padding = campoPadding.value + "px";
    retorno.style.fontsize = campoTamanho.value + "px";
}

formEstilo.addEventListener("submite", aplicarEstilo);
