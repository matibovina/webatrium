/* Funciones para slider de fotos - HOME */
var contaImgFondo = 0;
var imgFondoCabeza = new Array();


for (let i = 0; i < 9; i++) {
  imgFondoCabeza[i] = new Image();
  imgFondoCabeza[i].src = "img/fotos_slyder/" + (i + 1) + ".jpg";
}

function cambiaImagenCabezaAlante() {
  const slider = document.getElementById("slider");

  if (contaImgFondo == 8) {
    contaImgFondo = -1;
  }
  contaImgFondo++;
  document.getElementById('sliderImg').src = imgFondoCabeza[contaImgFondo].src;
}

function cambiaImagenCabezaAtras() {
  if (contaImgFondo == 0) {
    contaImgFondo = 9;
  }
  contaImgFondo--;
  document.getElementById('sliderImg').src = imgFondoCabeza[contaImgFondo].src;
}

setInterval(function () {
  cambiaImagenCabezaAlante()
}, 3000);