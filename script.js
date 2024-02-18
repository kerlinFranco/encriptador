let texto = "";

function encriptarTexto() {
    texto = document.getElementById("textoUsuario").value.trim().toLowerCase();
    textoIngresado = texto.replace(/e/g, "enter")
                 .replace(/i/g, "imes")
                 .replace(/a/g, "ai")
                 .replace(/o/g, "ober")
                 .replace(/u/g, "ufat");
    mostrarTexto(textoIngresado);
}

function desencriptarTexto() {
    texto = document.getElementById("textoUsuario").value.trim().toLowerCase();
    textoIngresado = texto.replace(/enter/g, "e")
                 .replace(/imes/g, "i")
                 .replace(/ai/g, "a")
                 .replace(/ober/g, "o")
                 .replace(/ufat/g, "u");
    mostrarTexto(textoIngresado);
}


function contieneCaracteresEspeciales(texto) {
    // permite solo letras sin acentos
    var regex = /^[a-zA-Z\s]+$/;
    return regex.test(texto);
}

function mostrarTexto(textoIngresado) {
   
    textoIngresado = textoIngresado;
    console.log(textoIngresado.length);

    if (textoIngresado.length === 0) {
        let elementoHTML = document.getElementById("salida");
        elementoHTML.innerHTML =
            '<img src="imagenes/Muñeco.png" alt="">' +
            '<h2>No se encontró ningún mensaje</h2>';
    } else {
        if(!contieneCaracteresEspeciales(texto)){
            let elementoHTML = document.getElementById("salida");
            elementoHTML.innerHTML =
            '<img src="imagenes/Muñeco.png" alt="">' +
            '<h2>El texto no debe contener caracteres especiales o acentos.</h2>';
        }else{
            let elementoHTML = document.getElementById("salida");
            elementoHTML.innerHTML =
            `<p id="textoEncriptado">${textoIngresado}</p>`+
            `<button class="boton" onclick="copiarTexto()">Copiar</button>`;
        }
        
    }
   
}

function copiarTexto() {
   
    let textoEncriptado = document.getElementById("textoEncriptado");
    let seleccion = window.getSelection();
    let rango = document.createRange();
    rango.selectNodeContents(textoEncriptado);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
    document.execCommand('copy');
    seleccion.removeAllRanges();

}


