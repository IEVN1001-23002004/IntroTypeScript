import {type Producto, calcularISV2 } from "./05_desestructuraciones_funciones";

const carrito: Producto[] = [
    {
        desc: "Telefono 1",
        precio: 1800,
    },
    {
        desc: "Telefono 2",
        precio: 2800,
    },
    {
        desc: "Telefono 3",
        precio: 3800,
    }
];

const [total, isv] = calcularISV2(carrito);

console.log("Total Carrito: ", total);
console.log("ISV Carrito: ", isv);