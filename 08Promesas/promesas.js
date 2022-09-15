/* La siguiente función será utilizada como un call back, en caso de que sea exitosa la operación
 */

const fueExitosa = (resultado) => {
    console.log(`La operación fue exitosa ${resultado}`);
}

// La sig operación será utilizada como callback en caso contrario
const noFueExitosa = (resultado) => {
    console.log(`La operación NO fue exitosa ${resultado}`);
}

/* Una promesa recibe una función principal con 2 parámetros, un callback en caso de
    éxito, y un callback en caso contrario.
    Debe tener un formato request - response */
    const miPromesaSirve = new Promise((salioBien, salioMal) =>{
        /* En la función principal, va código que no se pueda completar de forma 
        síncrona o instantania, tal como peticiones a un servidor externo */

        try{
            const div = 10/5;
            // Dado que no hay nada malo, devolverá true (fue exitosa)
            salioBien(div);
        }catch(e){
            salioMal(e);
        }
    });

/* Existen 2 formas de accederr a los callback, pasando ambos en el then, o pasando
solo la de éxito en el then y usando un catch */

miPromesaSirve.then(fueExitosa, fueErronea);

miPromesaSirve.then(fueExitosa).catch(fueErronea);

// También se puede usar con funciones anónimas
miPromesaSirve.then((resultado) =>{
    console.log(`La operación fue exitosa ${resultado}`);
}).catch((resultado) =>{    
    console.log(`La operación NO fue exitosa ${resultado}`);
});

/* Algo importante a recordar de las promesas, es que son asíncronas, por lo que 
    no se ejecutarán de forma inmediata, sino que una vez que termina su ejecución
    con then determina qué hacer */

//para una función flecha
const funcionFlechaAsincrona = async() =>{
    const resPromesa = await miPromesaSirve.then((resultado) =>{
        console.log(`La operacion fue exitosa ${resultado}`);
        return resultado;
    });
    /* La variable resPromesa contiene el valor del resultado que está en el 
        return, pero solo porque usamos await, sino, se tendria una promesa y no
        se podría hacer uso del resultado */
        console.log(resPromesa);
};

funcionFlechaAsincrona();

