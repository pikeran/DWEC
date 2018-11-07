window.addEventListener("load",cargar,false);

function cargar(){
    console.log("Pagina cargada...");
    
    document.getElementById("play").addEventListener("click",playVideo,false);
    document.getElementById("atras").addEventListener("click",atrasVideo,false);
    document.getElementById("pausa").addEventListener("click",pauseVideo,false);
    document.getElementById("adelante").addEventListener("click",adelanteVideo,false);
    document.getElementById("vol-up").addEventListener("click",subirVolumen,false);
    document.getElementById("vol-down").addEventListener("click",bajarVolumen,false);
    document.getElementById("video-01").addEventListener("timeupdate",actualizarBarra,false);
    document.getElementById("contenedor-1").addEventListener("mouseover",difuminar,false);
    document.getElementById("contenedor-2").addEventListener("mouseover",difuminar,false);
    document.getElementById("contenedor-3").addEventListener("mouseover",difuminar,false); 
    document.getElementById("contenedor-1").addEventListener("mouseout",offDifuminar,false);
    document.getElementById("contenedor-2").addEventListener("mouseout",offDifuminar,false);
    document.getElementById("contenedor-3").addEventListener("mouseout",offDifuminar,false); 
    document.getElementById("contenedor-1").addEventListener("click",cambiarVideo,false);
    document.getElementById("contenedor-2").addEventListener("click",cambiarVideo,false);
    document.getElementById("contenedor-3").addEventListener("click",cambiarVideo,false);
}
var videoReproductor = "video-01";


function obtenerVideo() {
    var multimedia = document.getElementById(videoReproductor); 
    return multimedia;
}
function cambiarVideo(){
    elemento = this.id;
    multimedia = obtenerVideo();
    principalSrc = multimedia.src;
    alert(principalSrc);
}
function offDifuminar(){
    document.body.style.cursor = "auto";
    this.style.opacity=100;
}
function difuminar(){ 
    document.body.style.cursor = "Pointer";
    this.style.opacity=(50/100)-0.01;
}
//A mano compañero:
function actualizarBarra(){
    multimedia = obtenerVideo();
    tiempo = getTime();
    var duracion = multimedia.duration;
    var media1 = tiempo/duracion;
    var resultado = media1*100;

    document.getElementById("progreso").style.width = resultado+"%";
} 
function getTime(){
    multimedia = obtenerVideo();
    var tiempo = multimedia.currentTime;
    return tiempo;
}
function playVideo(){
    multimedia = obtenerVideo();
    multimedia.play();
}
function pauseVideo(){
    multimedia = obtenerVideo();
    multimedia.pause();
}
function atrasVideo(){
    multimedia = obtenerVideo();
    multimedia.currentTime = multimedia.currentTime - 5;  
}
function adelanteVideo(){
    multimedia = obtenerVideo();
    multimedia.currentTime = multimedia.currentTime + 5;  
}
function subirVolumen(){
    multimedia = obtenerVideo();
    multimedia.volume = multimedia.volume + 0.2; 
}
function bajarVolumen(){
    multimedia = obtenerVideo();
    multimedia.volume = multimedia.volume - 0.2;   
}



