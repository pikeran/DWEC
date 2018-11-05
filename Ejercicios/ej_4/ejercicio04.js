/*Escribir una función a la que le pasemos un argumento y nos indique si este es un objeto Date o no. */

var fecha="5sa/6/2019";

esDate(fecha);


function esDate(fecha) {
    
    if(Date.parse(fecha)){
        alert("es date");
    }else{
        alert("no es un date");
    }


}

