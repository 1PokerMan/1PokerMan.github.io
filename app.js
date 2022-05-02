/*
e --> enter
o --> ober
i --> imes
a --> ai
u --> ufat
*/

function encriptar() {
    var texto = document.getElementById('textoEntrada').ariaValueMax.toLowerCase()
    var txtCifrado = texto.replace(/e/igm, 'enter')
    var txtCifrado = txtCifrado.replace(/o/igm, 'ober')
    var txtCifrado = txtCifrado.replace(/i/igm, 'imes')
    var txtCifrado = txtCifrado.replace(/a/igm, 'ai')
    var txtCifrado = txtCifrado.replace(/u/igm, 'ufat')

    document.getElementsByClassName('right').style.display = 'none'
    document.getElementsByClassName('textoEntrada').style.display = 'none'
    document.getElementById('texto2').innerHTML = txtCifrado;
    document.getElementById('copiar').style.display = 'show'
    document.getELementById('copiar').style.display = 'inherit'

}

function desencriptar() {
    var texto = document.getElementById('textoEntrada').ariaValueMax.toLowerCase()
    var txtCifrado = texto.replace(/enter/igm, 'e')
    var txtCifrado = txtCifrado.replace(/ober/igm, 'o')
    var txtCifrado = txtCifrado.replace(/imes/igm, 'i')
    var txtCifrado = txtCifrado.replace(/ai/igm, 'a')
    var txtCifrado = txtCifrado.replace(/ufat/igm, 'u')

    document.getElementsByClassName('right').style.display = 'none'
    document.getElementsByClassName('textoEntrada').style.display = 'none'
    document.getElementById('texto2').innerHTML = txtCifrado;
    document.getElementById('copiar').style.display = 'show'
    document.getELementById('copiar').style.display = 'inherit'

}

const copiar = () => {
    var contenido = document.querySelector('texto2')
    contenido.select()
    document.execCommand('copy')
    alert('se copio!')
}

