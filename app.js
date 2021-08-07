/*
FUNCIONES PARA MOSTRAR COOKIES
*/

function quitarVentana(){
  document.getElementById('sacarCookies').style.display = "none";
  document.getElementById('quitarFondo').style.display = "none";
}

function desplegarMenu() {
  var x = document.getElementById("linksMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



// const slider = document.getElementById("slider");
// var sliderSection = document.getElementsByClassName("sliderSection");
// var sliderSectionLast = sliderSection[sliderSection.length-1];


// const btnLeft = document.getElementById("btnLeft");
// const btnRigth = document.getElementById("btnRight");

// slider.insertAdjacentElement("afterbegin", sliderSectionLast);

// function Next() {
//   let sliderSectionFirst = document.getElementsByClassName("sliderSection")[0];
  // slider.style.marginLeft = "-200%";
  // slider.style.transition = "all 0.5s";
//   setTimeout(function(){
//     slider.style.transition = "none";
//     slider.insertAdjacentElement("beforeend", sliderSectionFirst);
//     slider.style.marginLeft = "-100%";
//   }, 500);
// }

// function Prev() {
//   let sliderSection = document.getElementsByClassName("sliderSection");
//   let sliderSectionLast = sliderSection[sliderSection.length-1];
//   slider.style.marginLeft = "0";
//   slider.style.transition = "all 0.5s";
//   setTimeout(function(){
//     slider.style.transition = "none";
//     slider.insertAdjacentElement("afterbegin", sliderSectionLast);
//     slider.style.marginLeft = "-100%";
//   }, 500);
// }

// btnRigth.addEventListener("click", function(){
//   Next();
// })
// btnLeft.addEventListener("click", function(){
//   Prev();
// })

// setInterval(function() {
//   Next();
// }, 4000);