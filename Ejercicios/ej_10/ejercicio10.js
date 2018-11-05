function cargar(){
    document.getElementById("añadir").addEventListener("click", añadirDiv);
    console.log("Documento cargado");  
}
var contador = 0;
function añadirDiv(){

    //accedemos al div creado de muestra
    var node = document.getElementById("fila");
    
    //lo ocultamos.
    var dupNode = node.cloneNode(true);
    dupNode.classList.remove("muestra");
    contador++;

    //tratar nodeclone, añadiendo id a sus diferentes elementos,para evitar repeticiones.
    dupNode.id += contador;
    var entradas = dupNode.getElementsByTagName("input");
    var botones = dupNode.getElementsByTagName("button");

    for (var i=0; i<entradas.length; i++) {
        entradas[i].id += contador;
    }
    for (var i=0; i<botones.length; i++) {
        botones[i].id += contador;
    }

    botones[0].addEventListener("click",eliminarDiv);
    botones[1].addEventListener("click",editarDiv);
    node.parentNode.appendChild(dupNode); 

}
function eliminarDiv(){
    var abuelo = this.parentNode.parentNode;
     abuelo.removeChild(this.parentNode);
}
function editarDiv(){   
}
window.addEventListener("load",cargar,false);