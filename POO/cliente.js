export class Cliente {


    constructor(nombre, direccion, dni, telefono) {

        this.nombre = nombre;
        this.direccion = direccion;
        this.dni = dni;
        this.telefono = telefono;
    }


    get nombre(nombre) {
        return this.nombre;
    }
    get direccion(direccion) {
        return this.direccion;
    }
    get dni(dni) {
        return this.dni;
    }
    get telefono(telefono) {
        return this.telefono;
    }

    set nombre(nombre) {
        this.nombre = nombre;
    }
    set direccion(direccion) {
        this.direccion = direccion;
    }
    set dni(dni) {
        this.dni = dni;
    }
    set telefono(telefono) {
        this.telefono = telefono;
    }

}