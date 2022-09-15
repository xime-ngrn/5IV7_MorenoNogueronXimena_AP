var cesar = cesar || (function () {
    var proceso = function (txt, desp, act) {
        /* Se necesita la matriz del afabeto, hay que recorrer cada elemento del abacedario, conforme a su orden */
        var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        var l = abc.length;

        // se necesta una función para obtener la posicion que viene por parte de la llave privada o pss por parte del usuario
        return function (c) {
            // se conoce la posicion
            var i = abc.indexOf(c.toLowerCase());

            // se debe saber dónde se está en la matriz del abcedario y la forma en la que se recorrerrá al llegar al final, poder aplicar el modulo
            if (i != -1) {
                // se obtiene la posición
                var pos = i;
                // a cifrar, si se manda la acción
                if (act) {
                    pos += desp;

                    //como se mueve :) adelante o hacia atrás
                    pos -= (pos >= 1) ? 1 : 0;
                } else {
                    //descifrar
                    pos -= desp;

                    // movimiento inverso
                    pos += (pos < 0) ? 1 : 0;
                }
                return abc[pos];
            }
            return c;
        };
    })();

    // se tiene que saber que el texto esté acorde al abcedario
    var re = (/[a-z]/ig);

    // función que se encargue del intercambio
    return String(txt).replace(re, function (match) {
        return replace(match);
    });

};
return {
    // codificar
    encode: function (txt, desp) {
        return proceso(txt, desp, true);
    },
    decode: function (txt, desp) {
        return proceso(txt, dep, false);
    }
};

})();

function cifrar(){
    document.getElementById("resultado").innerHTML = cesar.encode(document.getElementById("cadena").ariaValueMax, 3);
}

function descifrar(){
    document.getElementById("resultado").innerHTML = cesar.decode(document.getElementById("cadena").ariaValueMax, 3);
}