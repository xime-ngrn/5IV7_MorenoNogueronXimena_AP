/* Se creará una API Rest que permite obtener información sobre diferentes pokemones, se puede consultar https://pokeapi.co */

const pokeApiURL = "https://pokeapi.co/api/v2/";

const pokedex = () =>{
    // Objeto auxiliar que permite acceder a los campos destinados a mostrar estadísticas del pokemon, se hace uso de la API del DOM, vista anteriormente :)
    const pokemonStatsElement = {
        hp: document.getElementById("pokemonStatHp"),
        attack: document.getElementById("pokemonStatAttack"),
        defense: document.getElementById("pokemonStatDefense"),
        specialAttack: document.getElementById("pokemonStatSpecialAttack"),
        specialDefense: document.getElementById("pokemonStatSpecialDefense"),
        speed: document.getElementById("pokemonStatSpeed")
    };
    /* Este es una referencia auxiliar  que nos permitirá utilizar las clases que están en el archivo CSS, de acuerdo al tipo de pokemon */
    let currentClassType = null;
    // Cadena para crear la imagen
    const imageTemplate = "<img class='pokedisply' src='{imgSrc}' alt='pokedisplay' />";

    // Este obj sirve para guardar las rutas de las img de apoyo cuando esperemos el resultado de la búsqueda o cuando o se encuentre el pokemon solicitado
    const  images = {
        imgPokemonNotFound: "./img/404.png",
        imgLoading: "./img/loading.gif"
    };

    /* Este objeto contiene las referencias de los elementos que se desplegarán con la info. del pokemon */
    const container = {
        imageContainer: document.getElementById("pokedisplay-container"),
        pokemonTypesContainer: document.getElementById("pokemonTypes"),
        pokemonNameElements: document.getElementById("pokemonNameResult"),
        pokemonHabilitiesElements: document.getElementById("pokemonHabilities"),
        pokemonMovesElements: document.getElementById("pokemonMoves"),
        pokemonIdElement: document.getElementById("pokemonId")
    }

    /* Este objeto contiene las referencias de los botones */
    const buttons = {
        all: Array.from(ddocument.getElementById("btn")),
        search: document.getElementById("btnSearch"),
        next: document.getElementById("btnUp"),
        previous: document.getElementById("btnDown"),
    };

    /* Este objeto procesa las habilidades del pokemon y los coloca en su respectivo contenedor */
    const processPokemonHabilities = (pokemonData) =>{
        let pokemonHabilitiesContent = "";
        pokemonData.habilities?.forEach((pokemonHability) =>{
            pokemonHabilitiesContent += `<li>${pokemonHabilities.hability.name}</li>`;
        });

        containers.pokemonHabilitiesElement.innerHTML = pokemonHabilitiesContent;
    };

    /* Poner la img de cargando y deshabilitar los botones */
    const aetLoading = () => {
            container.imageContainer.innerHTML = imageTemplate.replace("{imgSrc", images.imgLoading);
            buttons.all.forEach(button => button.disable = true);
        };

        // Para volver a habilitar los botones
    const setLoadingComplete = () => {
        buttons.all.forEach(button => checkDisabled(button));
    };

    /* Esta funci+ón consulta la pokeapi para obtener la info. del pokemon solicitado, Fetch nos sirve para hacer solicitudes a otros sitios, pero también se puedo utilizar para cargar archivo locales :)
    Fetch recibe la URL del recurso o destino de la petición, y un obj que nos ayuda a establecer algunos parámetros de la petición
    Fetch devuelve una promesa, por eso tiene un the y un catch. En cambio, getPokemonData devuelve un objeto JSON con la info. del pokemon, o en caso de error, devuelve el objeto de la petición que falló para saber más
    https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch */

    const getPokemonData = async(pokemonName) => fetch(`${pokeApiURL}pokemon/${pokemonName}`, 
    // SE PASA LA URL Y SE CONCATENA EL NOMBRE DEL POKEMON EN LA DIAGONAL
    {
        /* Existen varios métodos de HTTP que sirven para especificar el tipo de peticion, pero tambien, son necesarios para enviar adecuadamente sus parámetros para conocer más ingrese a: https://developer.mozilla.org/es/docs/Web/HTTP/Methods */

        method: 'GET', //Existe get, post, put, delete, etc. en la cabecera de la petición se puede especificar el tipo de info. que se va a utilizar, también aqui se suele colocar la id del usuario, por si la peticion requiere alguna info. de este tipo o por motivos de seguridad

        headers: {
            'Content-Type': 'application/json'
        },
        /* body : JSON.stringify(miObjJSON) || "" 
        Esto sirve cuando la petición usa un cuerpo, por ejemplo (post, put), se debe convertir en un string */

    })

        .then((res) => res.json()).catch((error) => ({requestFailed: true}));
    
    
        /* Esta función valida si se debe deshabilitar los botones o no, en este caso el botón inferior si se encuentra en el id=1, ya que no hay pokemon con Id negativo */
        const checkDisabled = (button) => {
            button.disable = button.id === "btnDown" && container.pokemonIdElement.value <= 1;
        };

        /* Esta función es la principal, valida que se reciba un nombre o id, y realiza la búsqueda del pokemon y procesa la respuesta para colocar los datos en sus respectivos campos */
        const  setPokemonData = async(pokemonName) => {
            if(pokemonName){
                /* Si existe, se pone la img de búsqueda y deshabilitar los botones en lo que se realiza la búsqueda */
                setLoading();

                /* Realizar la consulta, en este caso con await y esperar hasta tener respuesta, por lo que hay que utilizar un operador ternario ? para poner el nombre en minúscula si es string  */
                const pokemonData = await getPokemonData(typeof pokemonName === typeof "" ? pokemonName.toLowerCase() : pokemonName);

                if(pokemonData.requestFailed){
                    // No hay pokemon, se obtiene el error 404
                    container.imageContainer.innerHTML = imageTemplate.replace("{imgSrc}", images.imgPokemonNotFound);
                }else{
                    // poner las imagenes
                    container.imageContainer.innerHTML = `${imageTemplate.replace("{imgSrc}", pokemonData.sprites.front_default)} ${imageTemplate.replace("{imgSrc}", pokemonData.sprites.front_shiny)}`;

                    container.pokemonNameElement.innerHTML = pokemonData.name;
                    container.pokemonIdElement.value = pokemonData.id;

                    // el proceso de los datos 
                    processPokemonType(pokemonData);
                    processPokemonStats(pokemonData);
                    processPokemonHabilities(pokemonData);
                    processPokemonMoves(pokemonData);

                }

            }else{
                /* Esta es la forma de utilizar SweetAlert */
                Swal.fire({
                    title: "Error!",
                    text: "Ingresa el nombre de un pokemon: ",
                    icon: "Error",
                    confirmButtonText: "Aceptar"
                });
            }
        }
};