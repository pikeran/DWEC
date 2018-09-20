/*EJERCICIO 01
*/

var numero = prompt("Introducir numero de elementos del array");
var arraynumeros = new Array;
var mayor = 0;

for (let i=0; i<numero; i++){

    let numero2 = prompt("Introduce numero: ");
    arraynumeros.push(numero2);

    if(mayor<arraynumeros[i]){
        mayor=arraynumeros[i];
    }
}
 
for(let i=0;i<numero;i++){

    document.write(arraynumeros[i]);

}   
    document.write(mayor);