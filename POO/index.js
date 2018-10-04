import Libro from "./libro.js";

let titulo = "Libro autoayuda de adrian";
let  autor = "adrian";
let pais = "España";
let isbn = "12345678";



let libro1 = new Libro(titulo,autor,pais,isbn);

let persona = libro1.autor;
alert(persona);

console.log(libro1.autor);
