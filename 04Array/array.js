/* ARRAY :)
    forEach itera sobre los elementos del arreglo, no regresa NADA
    Probemos el forEach! Hace lo mismo que un bucle, pero itera sobre
    todos los elementos del array, cada que lo hace, ejecuta una función,
    su índice y el arreglo original
*/
// !! se tiene que exportar el módulo "razasPerros", buscar cómo shingaos hacerlo :)
razasPerros.forEach((raza, indice, arregloOriginal) => console.log(raza));

// en caso de no utilizar alguno de los parámetros, se pueden omitir :)
razasPerros.forEach((raza) => console.log(raza));

// función map, itera sobre los elementos del arreglo, regresa un arreglo diferente con el que nos muestra un nuevo arreglo :_)
const razasPerrosEnMAYUSCULAS = razasPerros.map((raza, indice, arregloOriginal) =>
raza.toUpperCase());

/* Existen otras opciones útiles, como:
    -find: permite buscar un elemnto dentro del arreglo, si lo encuentra, lo regresa, si no, lanza 'undefined'
    -findIndex: regresa el índice donde se encuentra el elemento, si no lo encuentra, devuelve -1, esta función es útil si se necesita modificar el elemento original dentro del arreglo :=(
*/

if(razasPerros.find(raza, indice, arregloOriginal => raza === "Chihuahua")){
    console.log("Ay! Chihuahua existe :)");
}else{
    console.log("Agregar Chihuahua :)");
    razasPerros.push("Chihuahua");
}

const indiceChihuahua = razasPerros.findIndex((raza, indice, arregloOriginal) => raza === "chihuahua")
    if(indiceChihuahua > -1){
        // que encuentre chihuahua
        console.log(razasPerros[indiceChihuahua]);
        razasPerros[indiceChihuahua] += " (Raza de perro pequeño)";
        console.log(razasPerros[indiceChihuahua]);
    };