// hace pequeñas las operaciones

const arrayOrdenadoMayorMenor = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(`Arreglo ordenado mayor a menor: ${arrayOrdenadoMayorMenor}`);

/* Suponiendo que se utiliza el valor mayo, es
    conveniente destructurarlo para tener un nombre más significativo
*/
const [valorMasGrande] =arrayOrdenadoMayorMenor;

console.log(`valorMas Grande: ${valorMasGrande}`);

// Se pueden obtener tantas variables como deseemos
// con el patron rest que indica ...nombre de la variable se pueden asignar el resto de los valores
const [valorMasGrande1, valorMasGrande2, valorMasGrande3, ...restoValores] = arrayOrdenadoMayorMenor;
console.log(`valorMasGrande1, valorMasGrande2, valorMasGrande3, ...restoValores: ${valorMasGrande1}, ${valorMasGrande2}, ${valorMasGrande2}, `)