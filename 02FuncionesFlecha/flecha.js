/* ¿QUÉ SON?
    Funciones que no generan su propio contexto (this),
    necesita ser declarada antes de ser usada y no necesitan 
    usar "return" o llaves para instrucciones de una sola
    línea.
    
    Ej. Función simple suma 2 números
*/

function sumaNormal(n1, n2){
    return n1+n2;
}

console.log(`sumaNormal(2, 2): ${
    sumaNormal(2, 2)
}`);

// Equivalente como función flecha
const sumaFlecha = (n1, n2) => n1+n2;
console.log(`sumaFlecha(1, 2): ${
    sumaFlecha(1, 2)
}`);

//otra forma de la función flecha
const sumaFlecha1 = (n1, n2) => {
    return n1+n2;
}
console.log(`sumaFlecha1(6, 2): ${
    sumaFlecha1(6, 2)
}`);

//otra forma :), si se quiere devolver un objeto en una sola línea con una función flecha se debe envolver primero entre ()
const sumaFlecha2 = (n1, n2) => ({
    resultado : n1 + n2
});
console.log(`sumaFlecha2(6, 12): ${
    sumaFlecha2(6, 12)
}`);

// MAS FORMAS :_) Cuando la función flecha tiene 1 solo parámetro, no es necesario envolverlo entre ()
const cuadradoFlecha = n1 => n1**2;
console.log(`cuadradoFlecha(6): ${
    cuadradoFlecha(6)
}`);

