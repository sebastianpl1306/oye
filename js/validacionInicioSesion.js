function validar(formulario) {
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerHTML = "*email invalido";
    formulario.email.focus();
    return false;
  }else{
    document.getElementById("errorEmail").innerHTML = "";
  }

  if(formulario.contrasena.value.trim().length == 0 || formulario.contrasena.value.trim().length < 8){
    document.getElementById("errorContrasena").innerHTML = "*contrasena erronea";
    formulario.contrasena.focus();
    return false;
  }else{
    document.getElementById("errorContrasena").innerHTML = "";
  }

  alert("¡Bienvenido!");
  return true;
}