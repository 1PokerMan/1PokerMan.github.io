
const encriptar = () => {
    var texto = document.querySelector('.textoingreso').value.toLowerCase();
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    document.querySelector(".imagen").style.display = "none";
    document.querySelector(".mensajeizquierdo").style.display = "none";
    document.querySelector(".botoncopiar").style.display = "show";
    document.querySelector(".ingresartextoright").textContent = txtcifrado;
    document.querySelector(".textoingreso").textContent = " ";
    document.querySelector(".botoncopiar").style.display = "inherit";
}

const desencriptar = () => {
    var texto = document.querySelector(".textoingreso").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
    document.querySelector(".imagen").style.display = "none";
    document.querySelector(".mensajeizquierdo").style.display = "none";
    document.querySelector(".botoncopiar").style.display = "show";
    document.querySelector(".ingresartextoright").textContent = txtcifrado;
    document.querySelector(".textoingreso").textContent = " ";
    document.querySelector(".botoncopiar").style.display = "inherit";
}
  
const copiar = () => {
    var contenido = document.querySelector(".ingresartextoright");
    contenido.select();
    document.execCommand('copy');
    alert("Copiado");
}

