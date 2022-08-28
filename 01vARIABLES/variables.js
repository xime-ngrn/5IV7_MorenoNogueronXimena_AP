/* MANEJO DE VARIABLES EN JS ES6 :)
    Variables se establecen como bloques:
    -VAR
    -LET
    -CONST
    Cada variable pertenece a un bloque (aunque se tengan variables
        globales y locales), por lo que cada bloque puede tener 
        variables con el mimso nombre o se pueden sobreescribir
*/

if(true){
    //se declara x por primera vez
    // var x="x";
    let x="x"; // solo pertenece a ese bloque de código, no se puede acceder desde otros elementos
    console.log(x); //ya no usamos ALERT ni PROMPT
}

// La variable x existe, y conserva su valor
// Al hacerla const, la variable x ya no existe fuera del bloque. La siguiente línea provoca un error "ReferenceError"
console.log(x);
// La variable se redeclara con el valor y
// var x="y";
/* const x="y"; 
dado el tipo de variable (const), al acceder a ella se produce un error TypeError, para el comportamiento deseado, por lo tanto, el tipo de variable debería de ser let*/

var x="y";
console.log(x);
// Se asigan el nuevo valor a la variable, con "z"
x="z";
console.log(x);

