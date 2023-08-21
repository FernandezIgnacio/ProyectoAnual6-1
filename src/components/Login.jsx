import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
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
                style={[styles.input, styles.mail, emailError && styles.inputError]}
            />
            {emailError && <Text style={styles.errorText}>POR FAVOR, INGRESE UN EMAIL VALIDO.</Text>}
            <TextInput
                placeholder="Contraseña"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry
                style={styles.input}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={{color: '#012A4A',fontSize: 20,}}>INICIAR SESIÓN</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#468FAF',
    },
    Img: {
        width: 150, 
        height: 150,
        marginTop: -130,
    },
    mail:{
       marginTop:100,
    },

    input: {
        height: 40,
        width:350,
        fontSize: 17,
        
        borderColor: '#013A63',
        color:'#013A63',
        backgroundColor:'#89C2D9',
        
        borderWidth: 1.5,
        borderRadius: 10,
        
        marginBottom: 18,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    inputError: {
        borderColor: 'red',
        color: 'red',
    },
    errorText: {
        color: 'red',
        marginTop: -19.5,
        marginBottom: 3.5,
    },
    
    button: {
        backgroundColor: '#A9D6E5',
        marginTop:50,
        paddingVertical: 8, 
        paddingHorizontal: 8,
        borderRadius: 5,

    },
});

export default Login;
