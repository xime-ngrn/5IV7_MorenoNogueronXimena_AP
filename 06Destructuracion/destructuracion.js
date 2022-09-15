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
console.log(`valorMasGrande1, valorMasGrande2, valorMasGrande3, ...restoValores: ${valorMasGrande1}, ${valorMasGrande2}, ${valorMasGrande3}, ${restoValores}`)

/* Suponer que se tiene el sig. ejemplo para poder ejemplificar el resultado de búsque da la función */
const resBusqueda={
    resultados: [
        "resultado 1",
        "resultado 2",
        "resultado 3",
        "resultado 4",
        "resultado 5",
        "resultado 6",
        "resultado 7",
    ], total: 7,
    mejorCoincidencia: "resultado 3"
};

console.log(`resultadoBusqueda: ${resultadoBusqueda}`);

/* Suponer que sólo es necesaria la mejor coincidencia, por lo que se puede destructurar un objeto, de la siguiente manera */
const {mejorCoincidencia} = resultadoBusqueda;
console.log(`mejorCoindicencia: ${mejorCoincidencia}`);

/* Además, se puede cambiar el nombre, puede ser útil para mantener la consistencia en el código, haciendo uso de la nomenclatura: */
const {mejorCoincidencia: nuevoNombre} = resultadoBusqueda;
console.log(`nuevoNombre: ${nuevoNombre}`);

/* REACT Otro uso de la destructuración, es que se pueden crear copias tanto de objetos como de arreglos */
const copiaResultadoBusqueda = {...resultadoBusqueda};
// para objeto se utiliza {}
console.log(`copiaResultadoBusqueda: ${copiaResultadoBusqueda}`);

const copiaArrayOrdenado = [...arrayOrdenadoMayorMenor];
// para arrays se utiliza []
console.log(`copiaArrayOrdenado: ${copiaArrayOrdenado}`);

/* Al destructurar se puede agregar info. a los componentes */
const copiaResultadoBusquedaModificada = {...resultadoBusqueda, cadenaBuscada: "resultado 3"};
console.log(`copiaResultadoBusquedaModificada: ${copiaResultadoBusquedaModificada}`);

const copiaArrayOrdenadoNuevoMayor = [11, ...arrayOrdenadoMayorMenor];
console.log(`copiaArrayOrdenadoNuevoMayor: ${copiaArrayOrdenadoNuevoMayor}`);

