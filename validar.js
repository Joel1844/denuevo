function validar() {
    var nombre, apellido,correo,contraseña,expresion ;

     nombre = document.getElementById("nombres").value;
     apellido = document.getElementById("Apellidos").value;
     correo = document.getElementById("correo").value;
     contraseña= document.getElementById("contraseña").value;

     expresion = /\w+@\w+\.+[a-z]/;
    
    if(nombre === "" || apellido === "" || correo === "" || contraseña ===""){
        alert("todos los campos son obligatorios");
        return false;
    }
    else if(nombre.length>30){
        alert("el nombre es muy largo");
        return false;
    }
    else if(apellido.length>25){
        alert("los apellidos son muy largo");
        return false;
    }
    else if(correo.length>50){
        alert("el correo es muy largo");
        return false;
    }
    else if(!expresion.test(correo)){
    alert("el correo no es valido");
    return false;
    }


    else if(contraseña.length>20){
        alert("el nombre es muy largo");
        return false;
    }
}


