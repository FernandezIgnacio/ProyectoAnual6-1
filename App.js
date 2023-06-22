import Constants from 'expo-constants'; //importo para utilizar el margin predefinido para no colicinar con la barra superior
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={ {marginTop: Constants.statusBarHeight/* Marginpredefinido */, flexGrow: 1 }}>
      
    </View>
  );
}

