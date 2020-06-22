function validar(formulario) {
    //Verifica el correo electronico
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
        document.getElementById("errorEmail").innerHTML = "* email invalido *";
        formulario.email.focus();
        return false;
    }else{
        document.getElementById("errorEmail").innerHTML = "";
    }

    //Verifica que la contraseña no este vacia y que tenga minimo 8 caracteres
    if(formulario.contrasena.value.trim().length == 0){
        document.getElementById("errorContrasena").innerHTML = "* Campo Obligatorio *";
        formulario.contrasena.focus();
        return false;
    }else{
        document.getElementById("errorContrasena").innerHTML = "";
    }
    
    if(formulario.contrasena.value.trim().length < 8){
        document.getElementById("errorContrasena").innerHTML = "debe tener minimo 8 caracteres";
        formulario.contrasena.focus();
        return false;
    }else{
        document.getElementById("errorContrasena").innerHTML = "";
    }

    //Verifica que la contraseña y la confirmacion coinsidan
    if(formulario.contrasena.value != formulario.confirmacion.value){
        document.getElementById("errorConfirmacion").innerHTML = "* Las contraseñas no coinciden *";
        formulario.confirmacion.focus();
        return false;
    }else{
        document.getElementById("errorConfirmacion").innerHTML = "";
    }

    //Verifica que el campo edad este seleccionado
    if (formulario.generoFavorito.value == "") {
        document.getElementById("errorGenero").innerHTML = "* campo obligatorio *";
        return false;
    }else{
        document.getElementById("errorGenero").innerHTML = "";
    }

    //Verifica que el campo edad este seleccionado
    if (formulario.edad.value == "") {
        document.getElementById("errorEdad").innerHTML = "* campo obligatorio *";
        return false;
    }else{
        document.getElementById("errorEdad").innerHTML = "";
    }

    //Verifica que el campo terminos este seleccionado
    if (!formulario.terminos.checked) {
        document.getElementById("errorTerminos").innerHTML = "</br>Debes aceptar los terminos y condiciones";
        return false;
    }else{
        document.getElementById("errorTerminos").innerHTML = "";
    }
    alert("¡Registro Exitoso!");
    return true;
}