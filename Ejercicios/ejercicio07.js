function crearTexto(padre, hijo, texto) {
    var father = document.getElementById(padre);
    var son = document.createElement(hijo);
    var text = document.createTextNode(texto);
    
    son.appendChild(text);
    father.appendChild(son);
}