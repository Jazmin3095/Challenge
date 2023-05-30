const inputMensaje= document.querySelector(".mensaje");
const inputResultado= document.querySelector(".resultado");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");



function encriptar(){
    var mensaje = inputMensaje.value;
    console.log(mensaje)
    var mensajeEncriptado = mensaje
    .replaceAll("a", "ai")
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat")
    console.log(mensajeEncriptado);
    inputResultado.value = mensajeEncriptado;
}

function desencriptar(){
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")
    
    inputResultado.value = mensaje;
}

function copiar(){
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}


btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick =desencriptar;

btnCopiar.onclick = copiar
    



