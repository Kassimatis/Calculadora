function insert(value) {
    let resultado = document.getElementById("resultado");
    resultado.value += value;
}

function clear() {
    let resultado = document.getElementById("resultado");
    resultado.value = "";
}

document.getElementById("apagar").addEventListener("click", clear);

function backspace() {
    let resultado = document.getElementById("resultado").value;
    resultado = resultado.substring(0, resultado.length - 1);
    document.getElementById("resultado").value = resultado;
}

document.getElementById("sub").addEventListener("click", backspace);

function calculo() {
    let resultado = document.getElementById("resultado").value;
    document.getElementById("resultado").value = eval(resultado);
}

document.getElementById("calcular").addEventListener("click", calculo);

function pontuar() {
    let resultado = document.getElementById("resultado").value;
    resultado += ".";
    document.getElementById("resultado").value = resultado;
}

document.getElementById("ponto").addEventListener("click", pontuar);