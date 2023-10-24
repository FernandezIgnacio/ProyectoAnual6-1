import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity,ScrollView} from 'react-native';
import { FIREBASE_AUTH } from "../../firebase.js";

import { ActivityIndicator } from 'react-native';

import { createUserWithEmailAndPassword} from 'firebase/auth';
import SingInGoogle from '../components/SingInGoogle.jsx';

const Register = () => {
  const [Name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [dni, setDni] = useState('');
  const [phonenum, setPhonenum] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  

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
        
        <Text style={styles.text}>Crea una cuenta en SoccourMix</Text>

        <TextInput
          placeholder="Nombre"
          onChangeText={text => setName(text)}
          value={Name}
          style={[styles.input,styles.mail]}
        />
        
        <TextInput
          placeholder="Apellido"
          onChangeText={text => setSurname(text)}
          value={surname}
          style={styles.input}
        />
        <TextInput
          placeholder="DNI"
          onChangeText={text => setDni(text)}
          value={dni}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Telefono"
          onChangeText={text => setPhonenum(text)}
          value={phonenum}
          style={styles.input}
          keyboardType="numeric"
        />

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
        { loading ? <ActivityIndicator size = "large" color= "#012A4A" style={styles.loading}/>
        :  <>
              <TouchableOpacity style={styles.button} onPress={singUp}>
              <Text style={{color: '#A9D6E5',fontSize: 20,}}>CREAR</Text>
              </TouchableOpacity>
            </>
        }
        <SingInGoogle/>
      </View>
  );
};

const styles = StyleSheet.create({
  innerContainer:{
    flex: 1,
  },
  loading:{
    marginTop:60,
  },  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#468FAF',
  },
  text:{
    fontSize: 30,
    color:'#FFFFFF',
  },
  Img: {
    width: 150, 
    height: 150,
    marginBottom: 30,
  },
  mail:{
    marginTop:30,
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
    backgroundColor: '#012A4A',
    marginTop:50,
    paddingVertical: 15, 
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});

export default Register;