var numero = prompt("Ingrese el numero feliz/infeliz");

feliz(numero);




function feliz(numero2) {
    
if(numero2==1){
 return;   
}else{

let numerototal = numero2.toString().trim();
document.write(numerototal[1]);


document.write("\n cantidad de elementos:"+numerototal.length);

/*
for (let i = 0; i < arrayfinal.length; i++) {
    
    document.write("\n"+arrayfinal[i]);

}*/
}
}