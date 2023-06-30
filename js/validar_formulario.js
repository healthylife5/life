/*CODIGO DE JAVASCRIPT*/

function validarFormulario() {
    
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;
    
    var expresion1 = /\w+@\w+\.+[a-z]/;//correo electronico
    
    var expresion2 = /^[a-zA-Z0-9\_\-]{4,20}$/; // para nombre de usuario
    
    if(nombre === "" || correo === "" || mensaje === "" ) {
       
        alert("todos los campos son obligatorios!!!");
        return false;
       
    }if(nombre.length > 10) {
            
            alert("el nombre es muy largo, máximo 10 caracteres!!!");
            return false;
        
    }if(!expresion2.test(nombre)){
            
            alert("el nombre contiene caracteres no válidos!!!");
            return false;
             
    }if(correo.length > 50) {
        
            alert("el correo es muy largo, máximo 50 caracteres!!!");
            return false;
    
    }if(mensaje.length > 100) {
        
        alert("el mensaje es muy largo, máximo 100 caracteres!!!");
        return false;

    }
    if(!expresion1.test(correo)){
        
            alert("el correo no es válido!!!");
            return false;
        
    }else{
        alert("Los datos se han enviado con exito");
    }
}