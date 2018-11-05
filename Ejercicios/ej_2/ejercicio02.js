var contador = 0;
var felices = 1;
var numeros = 7;
var felis = false;
while (numeros <= 20) {
    contador = 0;
    var result = feliz(numeros);
    document.write(result+"<br>");
    if (felis) {
        document.write("<b>" +numeros + " es feliz</b><br>");
        felices++;
    } else document.write(numeros + " no es feliz<br>");
    numeros++;
    felis = false;
}

function feliz(numero2) {
    if (numero2 == 1) {
        document.write("<b>NO entra en contador > 8</b><br>");
        felis = true;
        return true;
    } else {
        if (contador > 8) {
            document.write("Entra en contador > 8<br>");
            return false;
        }
        let numerototal = numero2.toString().trim();
        document.write(numerototal+"<br>CONTADOR:" + contador + "<br>");
        var suma = 0;
        for (let i = 0; i < numerototal.length; i++) {

            var cuadrado = Number(numerototal[i]) ** 2;
            suma = suma + cuadrado;

        }
        contador++;
        feliz(suma);
    }
}