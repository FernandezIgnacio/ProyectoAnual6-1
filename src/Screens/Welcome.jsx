import { React, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


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
      <Text style={styles.text}>Bienvenido a SoccourMix</Text>

      {/* BOTON */}
      { loading ? <ActivityIndicator size = "large" color= "#0000ff"/>
        :  <>
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
              <Text style={{color: '#012A4A',fontSize: 20,}}>INICIAR SESIÓN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleRegisterPress} >
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
  
  text:{
    fontSize: 30,
    color:'#FFFFFF',
  },

  button: {
    backgroundColor: '#A9D6E5',
    marginTop:50,
    paddingVertical: 15, 
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});

export default Welcome;
