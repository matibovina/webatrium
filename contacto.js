/* VALIDACION DE FORMULARIO - CONTACTO */

function miFuncion(){
  document.querySelector('.formulario').style.display = "none";
  document.querySelector('.mensajeEnviado').style.display = "block";
}
function obtenerGenero()
{
    for (var i = 0; i < document.getElementsByName('genero').length; i++)
    {
        if (document.getElementsByName('genero')[i].checked)
        {
            if(document.getElementsByName('genero')[i].value == "otro"){
              document.querySelector(".otroGenero").style.display = "inline-block";
            } else {
              document.querySelector(".otroGenero").style.display = "none";

            }
        }
    }
}
function validacion(){
  let motivo = document.getElementsByName('motivo')[0];
  let nombre = document.getElementsByName('nombre')[0];
  let apellido = document.querySelector('.apellidos');
  let fecha = document.getElementsByName('fechaNacimiento')[0];
  let email = document.querySelector('#emailForm');
  let areaTexto = document.querySelector(".textarea");
  let guardarGenero = document.getElementsByName("genero");
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
   if(guardarGenero.value.length == 0){
    areaTexto.style.border  = "2px solid red";
  }else{
    areaTexto.style.border = "none";
    ok--;
  }


  if(ok == 0){
    miFuncion();
  }

}
