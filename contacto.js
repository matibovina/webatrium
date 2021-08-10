/* VALIDACION DE FORMULARIO - CONTACTO */

function miFuncion(){
  document.querySelector('.formulario').style.display = "none";
  document.querySelector('.mensajeEnviado').style.display = "block";
}

function validacion(){
  let motivo = document.getElementsByName('motivo')[0];
  let nombre = document.getElementsByName('nombre')[0];
  let apellido = document.querySelector('.apellidos');
  let fecha = document.getElementsByName('fechaNacimiento')[0];
  let email = document.querySelector('#emailForm');
  let areaTexto = document.querySelector(".textarea");
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  let ok = 6;
  if (motivo.value == "ningun") {
    motivo.style.border = "2px solid red";
} else{
  motivo.style.border = "none";
  ok--;
}
  if(nombre.value.length == 0){
    nombre.style.border = "2px solid red";
  } else{
    nombre.style.border = "none";
    ok--;
  }
  console.log(ok)
  if(apellido.value.length == 0){
    apellido.style.border  = "2px solid red";
  }else{
    apellido.style.border = "none";
    ok--;
  }
  console.log(ok)
  if(fecha.value.length == 0){
    fecha.style.border = "2px solid red";
  }else{
    fecha.style.border  = "none";
    ok--;
  }
  console.log(ok)
  if (!emailRegex.test(email.value)){
    email.style.border = "2px solid red";
   } else {
    email.style.border  = "none";
    ok--;
   }
   if(areaTexto.value.length == 0){
    areaTexto.style.border  = "2px solid red";
  }else{
    areaTexto.style.border = "none";
    ok--;
  }
  if(ok == 0){
    miFuncion();
  }

}

function getRadioValue(genero)
{

    var elements = document.getElementsByName(genero);
    for (var i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
            console.log(elements[i].value);
        }
    }
}

function myFunction() {
  var i;
  for (i = 0; i < 2; i++) {
    if (genero[2].checked) {
      console.log("si funciona");
    }
  }
}

// var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
// var testDate = "03/17/21"
// if (date_regex.test(testDate)) {
//     document.getElementById("message").innerHTML = "Date follows dd/mm/yy format";
// }
// else{
//   document.getElementById("message").innerHTML = "Invalid date format";
// }