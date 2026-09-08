
interface IAlumno{
    nombre:string,
    apellido:string,
    edad:number,
    correo:string,
    nota?:number,
}

const alumno:IAlumno = {
    nombre: "Mario",
    apellido: "Ramirez",
    edad: 25,
    correo: "23001234@utl.com"
    
}

console.table(alumno)

let mascotas = ["perro","Gato","Pajaro"]
console.log(mascotas)
mascotas[1] = "Nuevo gato"
console.log(mascotas)
mascotas.push("Leon")
console.log(mascotas)

let tem:(number|String)[] =[]
tem.push(11)
tem.push("Once")
console.log(tem)