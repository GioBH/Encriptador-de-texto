
const cajaTexto = document.querySelector(".caja__texto");
const cajaRespuesta = document.querySelector(".caja__respuesta");
const mensajeInformativo = document.querySelector(".mensajeInformativo");
const botonCopiar = document.querySelector(".btnCopiar");

function btnEncriptar() {

    if (validaciones(cajaTexto.value)) {
        
    const txtEncriptado = encriptar(cajaTexto.value);
    cajaRespuesta.value = txtEncriptado;
    cajaTexto.value = "";
    cajaRespuesta.style.backgroundImage = "none";
    mensajeInformativo.style.display = "none";
    botonCopiar.style.display = "block"
    }
}

function encriptar(encriptarTexto){

    let matrizEcriptacion = [ ["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    encriptarTexto = encriptarTexto.toLowerCase();
        
        for (let i = 0; i < matrizEcriptacion.length; i++) {
            if (encriptarTexto.includes(matrizEcriptacion[i][0])) {
                encriptarTexto = encriptarTexto.replaceAll(matrizEcriptacion[i][0], matrizEcriptacion[i][1])
            }
        }
        return encriptarTexto;
   
}

function btnDesencriptar() {
    const txtEncriptado = desencriptar(cajaTexto.value);
    cajaRespuesta.value = txtEncriptado;
    cajaTexto.value = "";

}

function desencriptar(desencriptarTexto){
    let matrizEcriptacion = [ ["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    desencriptarTexto = desencriptarTexto.toLowerCase();

    for (let i = 0; i < matrizEcriptacion.length; i++) {
        if (desencriptarTexto.includes(matrizEcriptacion[i][1])) {
            desencriptarTexto = desencriptarTexto.replaceAll(matrizEcriptacion[i][1], matrizEcriptacion[i][0])
        }
    }
    return desencriptarTexto;
}

function btnCopiar() {
    copiarTxtEncriptado();
}

function copiarTxtEncriptado() {    
    navigator.clipboard.writeText(cajaRespuesta.value)
    .then(() => {
        alert('Texto copiado al portapapeles');
    })
    .catch(err => {
        alert('Error al copiar texto: ', err);
    });
}


function validaciones(texto) {

    texto = texto.trim();

    if (texto.length===0) {
        
        alert("Ningun mensaje fue encontrado");
        return false;
    }

    const regex = /^[a-z ]+$/;
    
    if (!regex.test(texto)) {
 
        alert("No se permiten caracteres especiales, ni numeros");
        return false
    }

    return true;
} 