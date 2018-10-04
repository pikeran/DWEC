export default class Libro {


    constructor(titulo, autor, pais, isbn) {

        this._titulo = titulo;
        this._autor = autor;
        this._pais = pais;
        this._isbn = isbn;
    }


    get titulo() {
        return this._titulo;
    }
    get autor() {
        return this._autor;
    }
    get pais() {
        return this._pais;
    }
    get isbn() {
        return this._isbn;
    }

    set autor(val) {
        this._autor = val;
    }
    set pais(val) {
        this._pais = val;
    }
    set isbn(val) {
        this._isbn = val;
    }
    set isbn(val) {
        this._isbn = val;
    }

}
