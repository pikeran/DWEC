function cargar(){
    console.log("Pagina cargada...")

    var urlFinal = location.search;
    var cadena = urlFinal.split("&");

    //las variables estan en la posicion "1";
    var nombre = cadena[0].split("=");
    var apellido = cadena[1].split("=");    
    var correo = cadena[2].split("=");

     alert("Hola "+nombre[1]+" "+apellido[1]+" con el correo de: "+correo[1]);
    
}

window.addEventListener("load",cargar,false);