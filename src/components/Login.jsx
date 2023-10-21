import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { Home } from "./Home.jsx";
import { FIREBASE_AUTH } from "../../firebase.js";
import { ActivityIndicator } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

/*
const handleLogin = () => {
    if (!email.includes('@')  || !email.includes('.com')){
    setEmailError(true);
    return;
    }else
    setEmailError(false);
    return;
};
*/
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    
    const singIn = async () => {
        if (!email.includes('@')  || !email.includes('.com')){
            setEmailError(true);
            return;
        }else{
            setLoading(true)
            setEmailError(false);
            try {
                const response = await signInWithEmailAndPassword(auth, email, password)
                console.log(response);
                alert ('Se pudo ingresar con exito!!');
            } catch (error) {
                console.log(error);
                alert ('hubo un error al iniciar sesion: ' + error.message);
            }finally{
                setLoading(false);
            }
        }
    }


    const singUp = async () => {
        if (!email.includes('@')  || !email.includes('.com')){
            setEmailError(true);
            return;
        }else{
            setEmailError(false);
            setLoading(true)
            try {
                const response = await createUserWithEmailAndPassword(auth, email, password)
                console.log(response);
                alert ('Se pudo ingresar con exito!!');
            } catch (error) {
                console.log(error);
                alert ('Hubo un error al iniciar sesion: ' + error.message);
            }finally{
                setLoading(false);
            }
            return;
        }
    }




    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image source={require('../../assets/icon.png')} style={ styles.Img }/>

            {/* EMAIL */}    
            <TextInput
                placeholder="Correo"
                onChangeText={text => setEmail(text)}
                value={email}
                style={[styles.input, styles.mail, emailError && styles.inputError]}
            />

            {/* TEXTO DE ERROR */}

            {emailError && <Text style={styles.errorText}>POR FAVOR, INGRESE UN EMAIL VALIDO.</Text>}
            
            {/* CONTRASEÑA */}
            <TextInput
                placeholder="Contraseña"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry
                style={styles.input}
            />
            {/* BOTON */}
            { loading ? <ActivityIndicator size = "large" color= "#0000ff"/>
            :  <>
                <TouchableOpacity style={styles.button} onPress={singIn}>
                    <Text style={{color: '#012A4A',fontSize: 20,}}>INICIAR SESIÓN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={singUp}>
                    <Text style={{color: '#012A4A',fontSize: 20,}}> REGISTRARSE</Text>
                </TouchableOpacity>
            </>
            }
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

        marginBottom: 18,
        paddingHorizontal: 15,
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
        borderRadius: 20,

    },
});

export default Login;
