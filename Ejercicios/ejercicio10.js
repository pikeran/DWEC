document.addEventListener("DOMContentLoaded",cargar,false);

function cargar(){
    console.log("Documento cargado");  

    document.getElementById("añadir").addEventListener("click", añadirDiv);
    document.getElementById("borrar").addEventListener("click", eliminarDiv);
    document.getElementById("editar").addEventListener("click", editarDiv);

    
    

    function añadirDiv(){
       var nodoPadre = document.getElementById("consulta");
       
       var fila = document.createElement("div");
       fila.classList.add("fila");

       var dni = document.createElement("label");
       var textoDni = document.createTextNode("DNI");
       var inputDni = document.createElement("input");

       var nombre = document.createElement("label");
       var textoNombre = document.createTextNode("Nombre");
       var inputNombre = document.createElement("input");

       var apellidos = document.createElement("label");
       var textoApellidos = document.createTextNode("Apellidos");
       var inputApellidos = document.createElement("input");

        nodoPadre.appendChild(fila);
        dni.appendChild(fila);
        textoDni.appendChild(fila);
        inputDni.appendChild(fila);
        


    }
    function eliminarDiv(){
        
    }
    function editarDiv(){
        
    }
}

