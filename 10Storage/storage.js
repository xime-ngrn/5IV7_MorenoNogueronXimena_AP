/* La sig clase ayudará a manejar una lista de tareas, de tal forma que sea más     sencillo agrupar y realizar las operaciones más comunes */

const Storage = () => {
    class StorageTodoAppHelper{
        constuctor(storageName, initialValue){
            /* La storage de esta API viene de: --, provee el acceso al almacenamiento que existe por sesión y almacenamiento local, se usará la que tiene mayor persistencia en el local storage. Storage usa conjuntos de clave-valor, getItem devuelve el valor al proporcionar la clave, devuelve null si no existe */

            let currentStorage = localStorage.getItem(storageName);

            // cuando no existe aún, se inicializa
            if(!currentStorage){
                localStorage.setItem(storageName, JSON.stringify(initialValue));

                currentStorage = initialValue;
            }else{
                // cuando existe, se debe convertir en un obj JSON, dado que storage solo almacena cadenas de texto, se debe convertir a string lo que viene de JSON
                currentStorage = JSON.parse(currentStorage);
            }

            /* se guardan los valores actuales, como el nombre de la sección de almacenamiento que se utilizarán, los valores ya leídos se guardan para evitar la lectura y conversión constante de Storage, lo cual puede demorar conforme al obj crezca.
            Se deben de hacer privados */
            this._storageName = storageName;
            this._currentValues = currentStorage;

        }

        addItem(newItem){
            /* Cuando se agrega un valor, se agrega a los valores ya cargados, haciendo un respaldo en storage */
            this._currentValues.push(newItem);
            localStorage.setItem(this._storageName, JSON.stringify(this._currentValues));
        }

        getItem(findFunction){
            /* MÉTODO QUE REALIZA UNA BÚSQUEDA DE UN ELEMENTO 
            Cuando se quiere consultar un valor en específico, no es necesario buscarlo en Storage, basta con consultarlo en los valores ya cargados, es importante para cuando se quiere ahorrar procesamiento */
            return this._currentValues.find(findFunction);
        }

        updateItem(findFunction, newItem){
            /* Cuando se actuliza un valor, se actualiza en los valores ya cargados, haciendo un respaldo en storage. Se dan todos los datos a actulizar, y se añaden de golpe */
            const itemIndex = this._currentValues.findIndex(findFunction);
            this._currentValues[itemIndex] = {...this._currentValues[itemIndex], ...newItem};
            localStorage.setItem(this._storageName, JSON.stringify(this._currentValues));
        }

        getItem(){
            /* Cuando se quiere consultar los items no es encesario buscarlo, basta de nuevo consultarlo directo */
            return this._currentValues;
        }

        deleteItem(findFunction){
            /* cuando se elimina un valor, se debe actualizar a los valores ya cargados */
            this._currentValues.splice(this._currentValues.findIndex(findFunction), 1);
            localStorage.setItem(this._storageName, JSON.stringify(this._currentValues));
        }
    } // se termina la clase

    /* Se carga el template, usado para crear elementos de la nueva lista de tareas */
    const loadListItemTemplate = () =>{
        const templateDomItem = document.getElementById("listItemTemplate");
        const template = templateDomItem.innerHTML.trim(); // quita los espacios

        //una vez leidala plantilla, se elimina
        templateDomItem.remove();
        return template;
    }

    // cargar los elementos del dom
    const DOMElements = {
        taskName : document.getElementById("txtTaskName"),
        addButton : document.getElementById("btnAddTask"),
        taskList : document.getElementById("taskList"),
        changeWallPaperButton : document.getElementById("btnChangeWallper"),
        editUser : document.getElementById("editUser")
    };

    // se inicializa la plantilla y la sección de Storage
    const listItemTemplate = loadListItemTemplate();
    const storage = new StorageTodoAppHelper("Storage", []);

    // esta función se usa para marcar una tarea como completada
    const toggleTask = (domItem) => {
        if(domItem){
            storage.updateItem((item) => item.id === +domItem.id, {completed : !domItem.classList.contains("completed")});
        }

        if(!domItem.classList.contains("completed")){
            domItem.classList.add("completed");
        }else{
            domItem.classList.remove("completed");
        }
    }

    /* esta función se utiliza para eliminar una tarea de la lista */
    const deleteTask = (domItem) => {
        if(domItem){
            storage.deleteItem((item) => item.id === +domItem.id)
        }
        domItem.parentElement.remove();
    }

    /* Se crea un elemento de la lista de tareas */
    const createDOMTaskElement = (task) => {
        /* Se crea un elemento del DOM y se llena con los datos de la plantilla */
        const template = document.createElement('li');
        template.innerHTML = listItemTemplate.replace("{id}", task.id).replace("{template}", task.value).replace("{completed}", task.completed ? "completed" : "");
        /* Se accede a los nodos hijos creados en la plantilla, los cuales son los botones y se asignan los eventos a cada respectivo botón */

        const ourContent = template.firstChild;
        ourContent.childNodes.forEach(child => {
            if(child.classList?.contains("completed")){
                child.onclick = () => toggleTask(ourContent)
            }

            if(child.classList?.contains("delete")){
                child.onclick = () => toggleTask(ourContent)
            }
        });

        /* Agregamos al elemento recién creado la lista de tareas */
        DOMElements.taskList.append(template);
    }

    /* Esta función es para el renderizado */
    const renderTask = () => {
        /* si no tiene tareas en la lista, lo indicamos */
        DOMElements.taskList.innerHTML = storage.getItem() ? "" : "<li>No hay tareas aún :(</li>";

        // se procesan los elementos que se cargan en el storage
        storage.getItems().forEach(task => createDOMTaskElement(task));
        
        /* Esta función agrega una nueva tarea a la lista */
        const addTask = () => {
            if(DOMElements.taskName.value){
                const newTask = {
                    id: Date.now,
                    value: DOMElements.taskName.value,
                    completed: false
                }
            }
            // se guarda el elemento en storage y se limpia el campo de texto para crear el elemento de la nueva tarea
            storage.addItem(newTask);
            DOMElements.taskName.value = "";
            createDOMTaskElement(newTask);
        }

    };

    /* solicita que el usuario se registre, es de esta forma que se crean las sesiones en una aplicación de frontend, solo que se suelen usar tokens, en lugar del nombre, y en lugar de solicitarlo por un diálogo se hace uso de fetch, para pedir a un servidor el token, usualmente proporcionando el nombre de usuario y contraseña */
    const requestUser = async () => {
        const {value : userName} = await Swal.fire({
            input : 'text',
            inputLabel : 'Itroduce tu nombre',
            allowOutsideClick : false,
            allowEscapeKey : false,
            inputValidador : (value) => {
                if(!value?.trim()){
                    return 'Introduce tu nombre!'
                }
            },
            inputPlaceHolder : 'Introduce tu nombre',
        });

        if(userName){
            /* funciona de la misma forma en la que se guardan las tareas del ejercicio */
            localStorage.setItem("userName", userName);
            document.getElementById("tittle").innerHTML = `Bienvenido ${userName}!`;
        }
    };

    // esta función cambia el wallpaper de la función 
    const changeWallpaper = async() => {
        const {value : url} = await Swal.fire({
            input : 'url',
            inputLabel : 'Introduce la URL del wallpaper',
            inputPlaceHolder : 'Introduce la URL del wallpaper',
            validationMessage : "La URL no es válida",
        });

        if(url){
            localStorage.setItem("wallpaper", url),
            document.querySelector("body").style.background = `url(${url}) no-repeat center`
        }
    };

    // faltan 2 funciones
    init();

};
window.onload = Storage;