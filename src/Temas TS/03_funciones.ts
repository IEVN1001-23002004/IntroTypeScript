let x=2
let y=3
function sumar(x:number ,y:number,):number{
    let a=6
    let b=7
    let res = x+y
    console.log("La suma es: " + res)
    return x+y
}

let resultado=sumar(x,y)
console.log(resultado)

interface Mascota {
  nombre: string;
  edad: number;
  sexo?: string; 
  raza: string;
  vacunado: boolean;
  mostrar(): void; 
}

const nuevaMascota: Mascota = {
  nombre: "Alfredo",
  edad: 5,
  raza: "Pastor Alemán",
  vacunado: true,
  mostrar() {
    console.log(`La edad de: ${this.nombre} es ${this.edad}`);
  }
};

function mostrarMascota(mascota: Mascota, x?: number): void {
  mascota.edad=6
  console.log(mascota);
  mascota.mostrar(); 
}

mostrarMascota(nuevaMascota, 6);