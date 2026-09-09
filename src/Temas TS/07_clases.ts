class Persona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir(){
        console.log(`Hola me llamo ${this.nombre} y tengo estos años: ${this.edad}`);
    }
}
const persona1: Persona = new Persona("Juan", 22);
persona1.imprimir();