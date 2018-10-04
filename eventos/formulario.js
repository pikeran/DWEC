
function PedirDni(dni) {
  var numero
  var letr
  var letra
  var expresion_regular_dni

  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
 
  if(expresion_regular_dni.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET';
     letra=letra.substring(numero,numero+1);

     var elementoDni = document.getElementById("dni");

    if (letra!=letr.toUpperCase()) {
       alert('Dni erroneo, la letra del NIF no se corresponde');
       elementoDni.style.backgroundColor = "red";
       elementoDni.style.color = "white";
     }else{
       alert('Dni correcto');
       elementoDni.style.backgroundColor = "green";
       elementoDni.style.color = "white";
     }
  }else{
     alert('Dni erroneo, formato no válido');
   }
}

function PedirCorreo(correo) {
    
    var expresion_regular_correo = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

    var elementoemail = document.getElementById("email");

    alert(correo);

    if(expresion_regular_correo.test(correo)){
        alert("Correcto");
        elementoemail.style.backgroundColor = "green";
        elementoemail.style.color = "white";
    }else{
        alert("Incorrecto");
        elementoemail.style.backgroundColor = "red";
        elementoemail.style.color = "white";
    }
}

function PedirTelefono() {
    var telefono = prompt("Introduzca su telefono: ");
    var expresion_regular_telefono = /^(\+34|0034|34)?[6|7|9][0-9]{8}$/;
    
    if(expresion_regular_telefono.test(telefono)){
        alert("Correcto");
    }else{
        alert("Incorrecto");
    }

}

function PedirIp() {
    var ip = prompt("Introduzca su ip: ");
    var expresion_regular_ip = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

    if(expresion_regular_ip.test(ip)){
        alert("Correcto");
    }else{
        alert("Incorrecto");
    }
}

function PedirUrl() {
    var url = prompt("Introduzca su url: ");
    var expresion_regular_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;


    if(expresion_regular_url.test(url)){
        alert("Correcto");
    }else{
        alert("Incorrecto");
    }

}




