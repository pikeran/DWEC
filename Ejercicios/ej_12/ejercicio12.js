window.addEventListener("load",cargar,false);

function cargar(){
    console.log("Pagina cargada...");
    
    document.getElementById("play").addEventListener("click",playVideo,false);
    document.getElementById("atras").addEventListener("click",atrasVideo,false);
    document.getElementById("pausa").addEventListener("click",pauseVideo,false);
    document.getElementById("adelante").addEventListener("click",adelanteVideo,false);
    document.getElementById("vol-up").addEventListener("click",subirVolumen,false);
    document.getElementById("vol-down").addEventListener("click",bajarVolumen,false); 
}
function obtenerVideo() {
    var multimedia = document.getElementById("video-01"); 
    return multimedia;
} 
function getTime(){
    multimedia = obtenerVideo();
    alert(multimedia.currentTime);
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
    multimedia.volume = multimedia.volume + 0.5; 
}
function bajarVolumen(){
    multimedia = obtenerVideo();
    multimedia.volume = multimedia.volume - 0.5;   
}



