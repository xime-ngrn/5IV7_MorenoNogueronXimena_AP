/* Definir el abcedario */

var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let llave = "";

$(document).ready(function(){
    $('#ci').click(function(){
        // se va a cifrar utilizando una función y = (x+z) % 27 , la función ocupa el mensaje, la llave y el módulo, se van a traer los datos de los campos de texto
        let key = document.getElementById('llave').value;
        //se valida la llave
        key = key.replace(/ /g, ''); // si la llave tiene espacio, que se la quite

        // se obtiene el mensaje
        let mess = document.getElementById('mess').value;
        mess = mess.replace(/ /g, '');

        //se crea la variable para el nuevo mensaje
        let newMess = "";
        let keyComplete = "";

        //algoritmo vigenere
        if(revision(mess, key)){
            // for para recorrer el tamaño del mensaje
            for(let i=0; i<mess.length; i++){
                //se va a aplicar la parte de la llave al mensaje
                keyComplete += key.charAt((i%Number(key.length)));
            }
            alert("Llave: " + keyComplete);

            // se obtiene la posición de la letra por letra del mensaje
            for(let i=0; i<mess.length; i++){
                let charr = mess.charAt(i);
                let posMess = getPosition(charr);

                charr = keyComplete.charAt(i);

                let posKey = getPosition(charr);

                // se ejecuta el algoritmo
                let newValue = change(posMess, posKey);

                // se obtiene el mensaje cifrado
                newMess += abc[newValue];
            }

            // se imprimen los resultados
            document.getElementById('resVigenere').value = newMess;
        }
        else{
            // si no se cumplen las condiciones

        }

    });

    $('descifrar').click(function(){
        // se aplica lo mismo pero al revés, de forma que ...

        // se obtiene la llave
        key = document.getElementById('llave').value;
        //se valida la llave
        key = key.replace(/ /g, ''); // si la llave tiene espacio, que se la quite

        // se obtiene el mensaje y se le quita el espacio
        let mess = document.getElementById('mess').value;
        mess = mess.replace(/ /g, '');

        //se crea la variable para el descifrado del mensaje
        let newMess = "";
        let keyComplete = "";

        if(revision(mess, key)){
            // for para recorrer el tamaño del mensaje
            for(let i=0; i<mess.length; i++){
                //se va a aplicar la parte de la llave al mensaje
                keyComplete += key.charAt((i%Number(key.length)));
            }
            alert("Llave: " + keyComplete);

            // se obtiene la posición de la letra por letra del mensaje
            for(let i=0; i<mess.length; i++){
                let charr = mess.charAt(i);
                let posMess = getPosition(charr);

                charr = keyComplete.charAt(i);

                let posKey = getPosition(charr);

                // se ejecuta el algoritmo
                let newValue = rechange(posMess, posKey);

                // se obtiene el mensaje cifrado
                newMess += abc[newValue];
            }

            // se imprimen los resultados
            document.getElementById('resVigenere').value = newMess;
        }
        else{
            // si no se cumplen las condiciones

        }
    });
});

// función de cambio
function change(posm, posk){
    // se aplica la función y= (x+z) % 27
    let y = (posm+posk)%27;
    return y;
}

// función de recarga
function rechange(posm, posk){
    let val = 0;

    if((posm-posk) >= 0){
        val = (posm+posk)%27;
    }
    else{
        val = (posm-posk+27)%27;
    }

    return val;
}

// función para la posición
function getPosition(letra){
    let pos = abc.indexOf(letra);
    return pos;
}

// función de la revisión, se debe traer al mensaje y al desplazamiento, se valida la entrada de datos a partir de una exp. regular
function revision(mess, desp){
    const re = /^([a-zñ?]+([]*[a-zñ?]?['-]?[a-zñ?]+)*)$/;

    var acc = true;

    if(!re.test(mess)){
        // cuando no ha sido aceptado
        sd();
        acc = false;
    }
    if(desp.lenght > mess.lenght){
        // Para decir que el texto no ha sido aceptado respecto a la llave
        sz();
    }
    if(!re.test(desp)){
        sdd();
        acc = false;
    }
    return acc;
}

function sd(){
    Swal.fire({
        title: "Error",
        text: "El texto ingresado no ha sido aceptado, ingrese solo minúsculas y evite números y símbolos",
        icon: 'error'
    });
    alert("El texto ingresado no ha sido aceptado, ingrese solo minúsculas y evite números y símbolos");
}

function sdd(){
    Swal.fire({
        title: "Error",
        text: "La clave ingresada no cumple con las normas",
        icon: 'error'
    });
    alert("La clave ingresada no cumple con las normas");
}

function sz(){
    Swal.fire({
        title: "Error",
        text: "La clave no puede ser mayor que el mensaje",
        icon: 'error'
    });
    alert("La clave no puede ser mayor que el mensaje");
}