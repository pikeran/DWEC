
function pedirDni(info) {
  var numero;
  var letra;
  var expresion_regular_dni;
  var dni = info.value;

  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
 
  var elementoDni = document.getElementById("dni");

  if(expresion_regular_dni.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET';
     letra=letra.substring(numero,numero+1);

     

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
       elementoDni.style.backgroundColor = "red";
       elementoDni.style.color = "white";
   }
}

function pedirCorreo(info) {

    
    var correo = info.value;

    alert(correo);
    var expresion_regular_correo = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
    
    var elementoemail = document.getElementById("email");


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

var passwd;
function pedirPasswd (info) {
    
passwd = info.value;
var expresion_regular_passwd = /[0-9]{1,}[A-Za-z]{1,}/g;
var elementoPasswd = document.getElementById("passwd");


if(expresion_regular_passwd.test(passwd)){
    alert("Correcto");
    elementoPasswd.style.backgroundColor = "green";
    elementoPasswd.style.color = "white";
}else{
    alert("Introduzca una letra y numero");
    elementoPasswd.style.backgroundColor = "red";
    elementoPasswd.style.color = "white";
}
}

function repetirPasswd(info){

    var passwd2 = info.value;
    var elementoPasswd2 = document.getElementById("reppasswd"); 

if(passwd == passwd2){
    alert("Coinciden");
    elementoPasswd2.style.backgroundColor = "green";
    elementoPasswd2.style.color = "white";
}
else{
    alert("No coinciden las contraseñas");
    elementoPasswd2.style.backgroundColor = "red";
    elementoPasswd2.style.color = "white";
}



}


