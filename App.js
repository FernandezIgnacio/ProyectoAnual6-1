import React from "react";
import Constants from 'expo-constants'; //importo para utilizar el margin predefinido para no colicinar con la barra superior
import { View ,Text } from 'react-native';

export default function App() {
  return (
    <View style={ {marginTop: Constants.statusBarHeight/* Marginpredefinido */, flexGrow: 1 }}>
      <Text>hola</Text>
    </View>
  );
}

