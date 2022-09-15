/* Se va a crear un carrusel de imágenes, que se consume por medio de una API  */

window.onload = () => {
    //las imagenes se obtendrán aquí
    const imagenes = [
    "https://w.wallhaven.cc/full/l3/wallhaven-l315vy.png",
    "https://w.wallhaven.cc/full/j3/wallhaven-j3gz1w.jpg",
    "https://w.wallhaven.cc/full/72/wallhaven-725mg9.png",
    "https://w.wallhaven.cc/full/rd/wallhaven-rd83mq.jpg"
    ];

    /* Con la API del DOm es posible acceder al documento HTML, por lo que se necesita buscar los nodos de alguna manera, a partir de los id. Los elementos se pueden buscar de diferentes maneras, por id, class, nombre, etiquetas (de CSS). Solo la búsqueda por id devuelve un único elemento, los demás devolverán una lista de nodos, la cual no debe confundirse con un arreglo. 
    Como obtener los botones.. vease abajo :)
    */

    const display = document.getElementById("display");
    const botones = Array.from(document.getElementsByName("boton"));
    const campoMensaje = document.getElementById("mensaje");
    const mensajes = document.getElementById("mensajes");
    const colorValor = document.getElementById("colorValor");

    let imagenActual = 0;
    const imagenSiguiente = () =>{
        /* Se accede a la img dentro del array, con su índice, cuando es la última regresamos a la primer */
        if(imagenActual > 0){
            imagenActual--;
        }else{
            imagenActual = imagenes.lenght-1;
        }

        display.src = imagenes[imagenActual];
    };

    const pantallaCompleta = () =>{
        /* Otra forma para cuando se solicita la pantalla completa nos devuelva una promesa, por si deseamos manejar al elemento de pantalla completa */
        display.requestFullscreen();
    };

    const mostrarMensajes = ()=>{
        /* Otra de las cosas que son posibles hacer, es modificar el HTML interno de un elemento para agregar de forma dinámica nuevos elementos */
        mensajes.innerHTML += `${campoMensaje.value} <br/>`;
        campoMensaje.value = "";
        /* Si se desea manipular los elementos recien creados:
            createElement
            const lista = document.createElement("ul");
            const elementoLista = document.createElemnt("li");
            elementoLista.onclick = pantallaCompleta;
            elementoLista.innerHTML = `${campoMensaje.value}`;
            lista.append(elementoLista);
            mensajes.append(lista);
        */
    };

    const cambiarColor = () =>{
        /* en lugar de usar typeColor, usamos un botón con un ícono */
        colorValor.click();
    };

    const inicializar = () =>{
        /* Vamos a ver los botones :) */
        botones.find(boton => boton.id === "siguiente").onclick = imagenSiguiente;
        botones.find(boton => boton.id === "anterior").onclick = imagenActual;
        botones.find(boton => boton.id === "pantallaCompleta").onclick = pantallaCompleta;
        botones.find(boton => boton.id === "mostrarMensaje").onclick = mostrarMensajes;
        botones.find(boton => boton.id === "cambiarColor").onclick = cambiarColor;

        // Se puede manipular cualquier atributo
        colorValor.onchange = () =>{
            mensajes.style.color = colorValor.value;
        };

        display.src = imagenes[0];
    };

    inicializar();

};