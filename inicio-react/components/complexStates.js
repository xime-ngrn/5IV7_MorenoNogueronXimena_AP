import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from 'react';

const complexStates = () => {
    //aunque podamos declarar multiples estados tambien podemos usar uno solo utilizando un objeto
    const [userData, setUserData] = useState({
        name:"",
        lastName:"",
        age:"",
        touchesCounter:0
    });
    //una buena practica es extrae las funciones que podemos en los eventos de tal forma que la plantilla quede mas
    //limpia y facil de leer
    //actualizar datos
    const handleChangeName = newName => setUserData({...userData, name: newName});
    const handleChangeLastName = newLastName => setUserData({...userData, lastname: newLastName});
    const handleChangeAge = newAge => setUserData({ ...userData, age: newAge });
    const validateRequieredField = userData.name && userData.lastName && userData.age;
    //Activar el boton de enviar
    const handleScreenPressed = () => setUserData((currentUserData) => {
        currentUserData.touchesCounter++;
        return { ...currentUserData };
    });
    const handleSubmit = () => {
        alert(`Tus Datos se han enviado ${userData.name} ${userData.lastName} ${userData.age}`);
        setUserData({ ...userData, touchesCounter: 0 })
    }
    return (<View>
        <View style={styles.containerColumn}>
            <Text style={styles.title}>Datos del Usuario</Text>
            <View style={styles.containerRow}>
                <Text>Nombre: </Text>
                <TextInput
                    style = {{height:40}}
                    placeholder = "Escribir aqui"
                    onChangeText={handleChangeName}
                    defaultValue={userData.name}>
                </TextInput>
            </View>
            <View style={styles.containerRow}>
                <Text>Apellido: </Text>
                <TextInput
                    style = {{height:40}}
                    placeholder = "Escribir aqui"
                    onChangeText={handleChangeLastName}
                    defaultValue={userData.lastName}>
                </TextInput>
            </View>
            <View style={styles.containerRow}>
                <Text>Edad: </Text>
                <TextInput
                    style = {{height:40}}
                    placeholder = "Escribir aqui"
                    keyboardType={"numeric"}
                    onChangeText={handleChangeAge}
                    defaultValue={userData.age}>
                </TextInput>
            </View>
        </View>
    </View>
        
    )
};

export default complexStates;