function cargar(){
    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var x1 = 50;
    var y1 = 20;
    var ancho1 = 30;
    var alto1 = 100;

    var x2 = 50;
    var y2 = 350;
    var ancho2 = 30;
    var alto2 = 100;

function pintar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(y1, x1, ancho1, alto1);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(y2, x2, ancho2, alto2);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}
function keyDownHadler(ev){
    if(ev.keyCode == 87){
      x1 = x1-2;
    }
    else if(ev.keyCode == 65){
      y1 = y1-2;
    }
    else if(ev.keyCode == 83){
      x1 = x1+2;
    }
    else if(ev.keyCode == 68){
       y1 = y1+2;
    }
    else if(ev.keyCode == 56){
        x2 = x2-2;
    }
    else if(ev.keyCode == 52){
        y2 = y2-2;
    }
    else if(ev.keyCode == 50){
        x2 = x2+2;
    }
    else if(ev.keyCode == 54){
        y2 = y2+2;
    }
  }
    function keyUpHadler(ev){
      
        
}
document.addEventListener("keydown", keyDownHadler,false);
document.addEventListener("keyup", keyUpHadler,false);
setInterval(pintar,60);    
}

window.addEventListener("load",cargar,false);