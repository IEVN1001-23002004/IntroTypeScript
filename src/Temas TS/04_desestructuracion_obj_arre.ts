interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:detalles
}
interface detalles{
    autor:string,
    anio:number
}
const reproductor:Reproductor={
    volumen:50,
    segundo:30,
    cancion:"mess",
    detalles:{
        autor:"Ed Sheeran" ,
        anio: 2015
    }
}
console.log("El volumen es: "+reproductor.volumen)
console.log("El Segundo actual es: "+reproductor.segundo)
console.log("La cancion es:"+reproductor.cancion)
console.log("El autor es:"+reproductor.detalles.autor)
console.log("El anio es:"+reproductor.detalles.anio)

const{volumen,segundo,cancion,detalles}=reproductor
const{autor,anio}=detalles
console.log("El volumen es: "+volumen)
console.log("El Segundo actual es: "+segundo)
console.log("La cancion es:"+cancion)
console.log("El autor es:"+autor)
console.log("El anio es:"+anio)

const dbz:string[] = ["Goku", "Vegeta", "Trunks","Piccolo"]
console.log(dbz[1])
const[p1,,,p2]=dbz
console.log(p2)
