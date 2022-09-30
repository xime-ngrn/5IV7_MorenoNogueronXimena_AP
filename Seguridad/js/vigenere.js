var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function cifrarV(){
    var clave = document.getElementById("llaveV").value;
    clave = clave.toLowerCase();
    var frase = document.getElementById("mess").value;
    frase = frase.toLowerCase();
    var lFrase = frase.length;
    var lClave = clave.length;

    let newFrase = "";
    let keyComplete = "";
    if(lClave < lFrase){
        // for para recorrer el tamaño del mensaje
        for(let i=0; i<lFrase; i++){
            //se va a aplicar la parte de la llave al mensaje
            keyComplete += clave.charAt((i%Number(lClave)));
        }

        // se obtiene la posición de la letra por letra del mensaje
        for(let i=0; i<lFrase; i++){
            let charr = frase.charAt(i);
            let posMess = getPosition(charr);

            charr = keyComplete.charAt(i);

            let posKey = getPosition(charr);

            // se ejecuta el algoritmo
            let newValue = rechange(posMess, posKey);

            // se obtiene el mensaje cifrado
            newFrase += abc[newValue];
        }

        // se imprimen los resultados
        document.getElementById("resVigenere").innerHTML = newFrase;
    }

}

function descifrarV(){
    var clave = document.getElementById("llaveVD").value;
    clave = clave.toLowerCase();
    var frase = document.getElementById("messD").value;
    frase = frase.toLowerCase();
    var lFrase = frase.length;
    var lClave = clave.length;

    let newFrase = "";
    let keyComplete = "";
    if(lClave < lFrase){
        // for para recorrer el tamaño del mensaje
        for(let i=0; i<lFrase; i++){
            //se va a aplicar la parte de la llave al mensaje
            keyComplete += clave.charAt((i%Number(lClave)));
        }

        // se obtiene la posición de la letra por letra del mensaje
        for(let i=0; i<lFrase; i++){
            let charr = frase.charAt(i);
            let posMess = getPosition(charr);

            charr = keyComplete.charAt(i);

            let posKey = getPosition(charr);

            // se ejecuta el algoritmo
            let newValue = rechange(posMess, posKey);

            // se obtiene el mensaje cifrado
            newFrase += abc[newValue];
        }

        // se imprimen los resultados
        document.getElementById("resVigenereD").innerHTML = newFrase;
    }
}

function getPosition(letra){
    let pos = abc.indexOf(letra);
    return pos;
}

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