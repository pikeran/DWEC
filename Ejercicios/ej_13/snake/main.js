function cargar(){
    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var x = 50;
    var y = 20;
    var Radius = 7;

    var arriba = false;
    var izquierda = false;
    var abajo = false;
    var derecha = false;

function pintar(){
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   drawsnake();
   moverSnake(); 
}
function crearCuerpo(){
    
}
function moverSnake(){
    if(arriba == true){
      y--;  
    }
    if(izquierda == true){
      x--;  
    }
    if(abajo == true){
        y++;  
      }
    if(derecha == true){
        x++;  
      }
}
function drawsnake(){
    ctx.beginPath();
    ctx.arc(x, y, Radius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function keyDownHadler(ev){
    if(ev.keyCode == 38){
        izquierda = false;
        derecha = false;
        abajo = false;
        arriba = true;
    }
    if(ev.keyCode == 37){
        izquierda = true;
        derecha = false;
        abajo = false;
        arriba = false;
    }
    if(ev.keyCode == 40){
        abajo = true;
        arriba = false;
        izquierda = false;
        derecha = false;
    }
    if(ev.keyCode == 39){
        derecha = true;
        abajo = false;
        arriba = false;
        izquierda = false;
    }
  }  

document.addEventListener("keydown", keyDownHadler,false);
setInterval(pintar,15);    
}

window.addEventListener("load",cargar,false);