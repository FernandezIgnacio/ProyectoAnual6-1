import React from "react";
import Constants from 'expo-constants'; //importo para utilizar el margin predefinido para no colicinar con la barra superior
import { View ,Text } from 'react-native';
import Login from "./src/components/Login";

export default function App() {
  return (
    <View style={ {marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Login />
    </View>
  );
}

