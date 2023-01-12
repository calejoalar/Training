// Ejemplo de imprimir
console.log("----------------");
console.log("Hola a todos. Soy Claudio");

// Operador de Invertir
console.log("----------------");
let a = 9;
for(let i=0;i<=10;i++)
    console.log(~i);

// Operador para eliminar una propiedad
console.log("----------------");
let b = {
    prop1: 23,
    prop2: "test"
};
console.log(b);
delete b.prop1;
console.log(b);

// Operador para saber el tipo de dato
console.log("----------------");
let c = 33;
let d = {
    prop1: 33
}
let e = [3,4, "dd"];
let f = true;

console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);

// Otros operadores
console.log("----------------");
let g = 3**4;
console.log(g);