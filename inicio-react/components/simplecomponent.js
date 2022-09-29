import {Text, TextInput, View} from "react-native";
import { useState } from "react";
//nuestro compnente atravez de una funcion
const SimpleState = () => {
    /* estado que devuelve un array al destructurar el primer elemento, el primer elemento es la variable y el segundo para actualizar su valor
    no sabemos que dijo jimmy */
    const [text, setText] = useState('');
    //podemos declarar multiples estados a la vez
    return <View style={{marginTop:50}}>
        <Text>Inversor de texto</Text>
        <TextInput
        style={{height: 40}}
        placeholder = "Escribe aquí"
        onChangeText = {
            /*onChangeTest es un metodo de Text imput que recibe una funcion
            que se manda a llamar cuando su valor cambia, le pase a la funcion como
            primer parametro el valor actualizado
            El set funciona de dos maneras distintas las forma mas sencilla de usarli es asi, proporcionandole un nuevo valor*/
            newText => setText(newText)
        }
        defaultValue = {text}
        ></TextInput>
    </View>
}