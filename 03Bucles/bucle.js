// Ej uso de bucle
const razasPerros = [
    "Gran Danes",
    "Dogo de Burdeos",
    "Dogo de Argentino",
    "San Bernardo",
    "Mastin del Pirineo",
    "Mastin Español",
    "Pastor Aleman",
    "Lobero Irlandes",
    "Pitbull"
];
/* Para la ueva versión de js se agregó el bucle for/of
    que permite iterar sobre los elementos de objetos 
    iterables :) (como arreglos )
*/

// utilizando un for tradicional :)
for(let indice=0; indice<razasPerros.length; indice++){
    console.log(razasPerros[indice]);
}

// con un for/of
console.log('\n--- For/of ---');
for(const raza of razasPerros){
    console.log(raza);
}

/* existe un bucle for/in, que itera sobre las llaves del objeto, en el caso
de un arreglo, estas llaves son los índices*/
console.log('\n--- For/in ---');
for(const indice in razasPerros){
    console.log(razasPerros[indice]);
}

