
class FiguraGeometrica{
    //constructor
    constructor(){
        //puede o no tener implementación
    }

    // --Métodos--
    area(){

    }
    perimetro(){
        console.log("Cálculo del perímetro de una figura")
    }
}

// Aploicar herencia a la clase
class Rectangulo extends FiguraGeometrica{

    //constructor
    constructor(base, altura){
        super();
        this._base = base;
        this._altura = altura
        this._area = null;
        this._actualizarArea = false;
        this._actualizarPerimetro = false;
    }
}