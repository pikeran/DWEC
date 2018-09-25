/*dni, una dirección de correo, un número de teléfono, una IP, y una
URL válida*/ 

PedirDni();
PedirCorreo();
PedirTelefono();
PedirIp();
PedirUrl();


function PedirDni() {
  var numero
  var letr
  var letra
  var expresion_regular_dni
 
  var dni = prompt("Introduzca su dni");

  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
 
  if(expresion_regular_dni.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET';
     letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
       alert('Dni erroneo, la letra del NIF no se corresponde');
     }else{
       alert('Dni correcto');
     }
  }else{
     alert('Dni erroneo, formato no válido');
   }
}

function PedirCorreo() {
    
    
    var expresion_regular_correo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(expresion_regular_correo.test(correo)){
        alert("Correcto");
    }else{
        alert("Incorrecto");
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




