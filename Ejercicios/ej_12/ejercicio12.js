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
    //TODO
    /* document.getElementById("video-02").addEventListener("mouseover",focusOscuro,false);
    document.getElementById("video-03").addEventListener("mouseover",focusOscuro,false);
    document.getElementById("video-04").addEventListener("mouseover",focusOscuro,false);
    document.getElementById("video-02").addEventListener("mouseout",onfocusOscuro,false);
    document.getElementById("video-03").addEventListener("mouseout",onfocusOscuro,false);
    document.getElementById("video-04").addEventListener("mouseout",onfocusOscuro,false); */
    /* document.getElementById("escape").addEventListener("click",finalizarPubli,false); */
    document.getElementById("video-02").addEventListener("click",cambiarVideo,false);
    document.getElementById("video-03").addEventListener("click",cambiarVideo,false);
    document.getElementById("video-04").addEventListener("click",cambiarVideo,false);

    portadaVideo();
    

     
}
var videoReproductor = "video-01";
function finalizarPubli(){

}
function publi(){

}
function portadaVideo(){
    var multimedia2 = document.getElementById("video-02");
    var multimedia3 = document.getElementById("video-03");
    var multimedia4 = document.getElementById("video-04");

    multimedia2.currentTime = 50;
    multimedia3.currentTime = 50;
    multimedia4.currentTime = 50;

}
function obtenerVideo() {
    var multimedia = document.getElementById(videoReproductor); 
    return multimedia;
}
function cambiarVideo(){
    secundarioSrc = this.src;
    multimedia = obtenerVideo();
    principalSrc = multimedia.src;
    this.src = principalSrc;
    multimedia.src = secundarioSrc;
    portadaVideo();
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



