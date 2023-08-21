import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import { NativeRouter } from 'react-router-native';
import { Home } from "./Home.jsx";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);

    const handleLogin = () => {
        if (!email.includes('@')  || !email.includes('.com')){
        setEmailError(true);
        return;
        }else
        setEmailError(false);
        return;

        onLogin(email, password);
    };

    return (
        <View style={styles.container}>
            <Image source={require('./icon.png')} style={ styles.Img }/>
            <TextInput
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                value={email}
                style={[styles.input, emailError && styles.inputError]}
            />
            {emailError && <Text style={styles.errorText}>Por favor, ingresa una dirección de correo electrónico válida.</Text>}
            <TextInput
                placeholder="Contraseña"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry
                style={styles.input}
            />
            <View style={styles.buttonContainer} >
                <Button title="Iniciar sesión" onPress={handleLogin} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    Img: {
        width: 150, 
        height: 150,
        marginTop: -300,
    },
    input: {
        height: 40,
        width:350,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 10,
    },
    inputError: {
        borderColor: 'red',
        color: 'red',
    },
    errorText: {
        color: 'red',
        marginBottom: 12,
    },
    buttonContainer: {
        borderRadius: 10, 
        overflow: 'hidden',
    },

});

export default Login;
