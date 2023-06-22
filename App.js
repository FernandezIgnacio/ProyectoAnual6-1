import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'; //importo para utilizar el margin predefinido para no colicinar con la barra superior
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={ {marginTop: Constants.statusBarHeight/* Margir predefinido */, flexGrow: 1 }}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

