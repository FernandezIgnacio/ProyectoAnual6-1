import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import SingInGithub from './SingInGithub'
import SingInGoogle from './SingInGoogle'

const Logins = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.box}>Etiqueta 1</Text>
            <Text style={styles.box}>Etiqueta 2</Text>
        </View>
    );
}
const styles = StyleSheet.create({  
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: 'skyblue',
        textAlign: 'center',
        lineHeight: 100,
    },
    button: {
      backgroundColor: '#012A4A',
      marginTop:50,
      paddingVertical: 15, 
      paddingHorizontal: 20,
      borderRadius: 20,
    },
    opacity:{
      backgroundColor: '#012A4A',
      marginTop:50,
      paddingVertical: 15, 
      paddingHorizontal: 15,
      borderRadius: 50,
    },
    Img: {
      width: 40, 
      height: 40,
    },
  });
export default Logins