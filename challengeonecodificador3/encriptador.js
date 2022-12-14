function codificar(msg) {
    let caracter = msg

    caracter = caracter.replace(/e/g, "enter");
    caracter = caracter.replace(/i/g, "imes");
    caracter = caracter.replace(/a/g, "ai");
    caracter = caracter.replace(/o/g, "ober");
    caracter = caracter.replace(/u/g, "ufat");

    return caracter;
}

function decodificar(msg) {
    let caracter = msg

    caracter = caracter.replace(/enter/g, "e");
    caracter = caracter.replace(/imes/g, "i");
    caracter = caracter.replace(/ai/g, "a");
    caracter = caracter.replace(/ober/g, "o");
    caracter = caracter.replace(/ufat/g, "u");


    return caracter;
}

function letraMayuscula() {
    const codigo = document.querySelector(".input-text");

    let codigoValue = codigo.value;
    let error;
    const regex = /[A-Z]/;

    if (regex.test(codigoValue)) {
        error = "Letra Mayuscula Identificada, intente nuevamente";
        return [true, error];
    } else {
        error = null;
        return [false, error];
    }
};

function identificaCaracEspecial(msg) {
    const codigo = document.querySelector(".input-text");

    let codigoValue = codigo.value;
    let error;
    const regex = /[^a-z A-Z 0-9]+/g;

    if (regex.test(codigoValue)) {
        error = "Caracter especial identificado, intente nuevamente";
        return [true, error];
    } else {
        error = null;
        return [false, error];
    }
};

const btnCodificar = document.querySelector("#codificar");

btnCodificar.addEventListener('click', function (event) {

    const exibir = document.querySelector(".exibir-msg");
    const error = document.querySelector("#msg-error");
    const codigo = document.querySelector(".input-text");

    let msgError = letraMayuscula();
    let caracError = identificaCaracEspecial();

    if (msgError[0]) {
        error.innerText = msgError[1];
    } if (caracError[0]) {
        error.innerText = caracError[1];
    } if (msgError[0] == false && caracError[0] == false) {
        error.innerText = "Codificado con Exito!";
        exibir.innerHTML = codificar(codigo.value);
    }
    event.preventDefault();
});

const btnDecodificar = document.querySelector("#decodificar");

btnDecodificar.addEventListener('click', function (event) {
    const exibir = document.querySelector(".exibir-msg");
    const error = document.querySelector("#msg-error");
    const codigo = document.querySelector(".input-text");

    let msgError = letraMayuscula();
    let caracError = identificaCaracEspecial();

    if (msgError[0]) {
        error.innerText = msgError[1];
    } if (caracError[0]) {
        error.innerText = caracError[1];
    } if (msgError[0] == false && caracError[0] == false) {
        error.innerText = "Decodificado con Exito!";
        exibir.innerHTML = decodificar(codigo.value);
    };
    event.preventDefault();
});

const copy = document.querySelector("#copy");

copy.addEventListener('click', function () {
    let display = document.querySelector(".exibir-msg");
    navigator.clipboard.writeText(display.textContent);
    document.execCommand("copy");
});
