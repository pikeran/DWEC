
    var jugador=true;
    var matriz;

function IniciarJuego(){
    document.getElementById("play").addEventListener("click",cargar,false);
}    


function cargar(){
    console.log("Pagina cargada...")
    
    document.getElementById("c00").addEventListener("click",rondaJuego,false);
    document.getElementById("c01").addEventListener("click",rondaJuego,false);
    document.getElementById("c02").addEventListener("click",rondaJuego,false);
    document.getElementById("c10").addEventListener("click",rondaJuego,false);
    document.getElementById("c11").addEventListener("click",rondaJuego,false);
    document.getElementById("c12").addEventListener("click",rondaJuego,false);
    document.getElementById("c20").addEventListener("click",rondaJuego,false);
    document.getElementById("c21").addEventListener("click",rondaJuego,false);
    document.getElementById("c22").addEventListener("click",rondaJuego,false);
    matriz = document.getElementsByClassName("neutro");
}

function rondaJuego(){
    

    if(this.className == "neutro"){
        if(jugador == true){
            this.classList.add("positivo");
            jugador = false;
        }else{
            this.classList.add("negativo");
            jugador =true; 
        }
        
console.log(matriz);

        //VICTORIA HORIZONTAL
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(matriz[0].classList[1] == "positivo" && matriz[1].classList[1] == "positivo" && matriz[2].classList[1] == "positivo"){
            alert("victoria jugador1");
        }
        if(matriz[0].classList[1] == "negativo" && matriz[1].classList[1] == "negativo" && matriz[2].classList[1] == "negativo"){
            alert("victoria jugador2");
        }
        if(matriz[3].classList[1] == "positivo" && matriz[4].classList[1] == "positivo" && matriz[5].classList[1] == "positivo"){
            alert("victoria jugador1");
        }
        if(matriz[3].classList[1] == "negativo" && matriz[4].classList[1] == "negativo" && matriz[5].classList[1] == "negativo"){
            alert("victoria jugador2");
        }
        if(matriz[6].classList[1] == "positivo" && matriz[7].classList[1] == "positivo" && matriz[8].classList[1] == "positivo"){
            alert("victoria jugador1");
        }
        if(matriz[6].classList[1] == "negativo" && matriz[7].classList[1] == "negativo" && matriz[8].classList[1] == "negativo"){
            alert("victoria jugador2");
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //VICTORIA VERTICAL
        if(matriz[0].classList[1] == "positivo" && matriz[3].classList[1] == "positivo" && matriz[6].classList[1] == "positivo"){
            alert("victoria jugador1");
        }
        if(matriz[0].classList[1] == "negativo" && matriz[3].classList[1] == "negativo" && matriz[6].classList[1] == "negativo"){
            alert("victoria jugador2");
        }
        if(matriz[1].classList[1] == "positivo" && matriz[4].classList[1] == "positivo" && matriz[7].classList[1] == "positivo"){
            alert("victoria jugador1");
        }
        if(matriz[1].classList[1] == "negativo" && matriz[4].classList[1] == "negativo" && matriz[7].classList[1] == "negativo"){
            alert("victoria jugador2");
        }
        if(matriz[2].classList[1] == "positivo" && matriz[5].classList[1] == "positivo" && matriz[8].classList[1] == "positivo"){
            alert("victoria jugador1");
        }
        if(matriz[2].classList[1] == "negativo" && matriz[5].classList[1] == "negativo" && matriz[8].classList[1] == "negativo"){
            alert("victoria jugador2");
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //VICTORIA DIAGONAL
        if(matriz[0].classList[1] == "positivo" && matriz[4].classList[1] == "positivo" && matriz[8].classList[1] == "positivo"){
            alert("victoria jugador1");
        }
        if(matriz[0].classList[1] == "negativo" && matriz[4].classList[1] == "negativo" && matriz[8].classList[1] == "negativo"){
            alert("victoria jugador2");
        }
        if(matriz[6].classList[1] == "positivo" && matriz[4].classList[1] == "positivo" && matriz[2].classList[1] == "positivo"){
            alert("victoria jugador1");
        }
        if(matriz[6].classList[1] == "negativo" && matriz[4].classList[1] == "negativo" && matriz[2].classList[1] == "negativo"){
            alert("victoria jugador2");
        }



    }else{
        alert("Selecciona un boton sin color.")
    }
}


window.addEventListener("load",IniciarJuego,false);