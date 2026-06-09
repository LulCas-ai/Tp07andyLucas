import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');


    const usuarioCorrecto = "admin";
    const passwordCorrecta = "1234";

    const manejarLogin = () => {
        if (usuario === usuarioCorrecto && password === passwordCorrecta) {
            setMensaje("MUY BUENO");
        } else {
            setMensaje("cosas incorrectas");
        }
    };

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Login</Text>
            <Image
                source={require('./src/yeslogo.jpg')}
                style={styles.imagen}
            />
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={usuario}
                onChangeText={setUsuario}
            />

            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.boton} onPress={manejarLogin}>
                <Text style={styles.textoBoton}>Ingresar</Text>
            </TouchableOpacity>

            {mensaje !== '' && <Text style={styles.mensaje}>{mensaje}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 28,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    boton: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 5,
        marginTop: 10,
    },
    textoBoton: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    mensaje: {
        marginTop: 15,
        textAlign: 'center',
    },
    imagen: {
        width: '100%',
        height: '10%',
        marginBottom: '5%'
    }
});