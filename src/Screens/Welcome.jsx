import { React, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SingInGoogle from '../components/SingInGoogle.jsx';

const Welcome = () => {
  const [loading, setLoading] = useState(false);
  
  const navigation = useNavigation();
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };
  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };


  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../../assets/icon.png')} style={ styles.Img }/>

      {/* Logo */}
      <Text style={styles.text}>Bienvenido a SoccourMix</Text>

      {/* BOTON */}
      { loading ? <ActivityIndicator size = "large" color= "#0000ff"/>
        :  <>
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
              <Text style={{color: '#A9D6E5',fontSize: 20,}}>INICIAR SESIÓN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleRegisterPress} >
              <Text style={{color: '#A9D6E5',fontSize: 20,}}> REGISTRARSE</Text>
          </TouchableOpacity>
      </>
      }

    <SingInGoogle/>
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
      marginBottom: 30,
  },
  text:{
    fontSize: 30,
    color:'#FFFFFF',
  },

  button: {
    backgroundColor: '#012A4A',
    marginTop:50,
    paddingVertical: 15, 
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});

export default Welcome;
