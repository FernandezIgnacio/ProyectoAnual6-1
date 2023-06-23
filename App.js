import React from "react";
import Constants from 'expo-constants'; //importo para utilizar el margin predefinido para no colicinar con la barra superior
import { View ,Text } from 'react-native';
import Login from "./src/components/Login";

import { app } from './firebase'; // Ruta correcta al archivo firebase.js
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(app);

const checkFirebaseConnection = () => {
  onAuthStateChanged(auth, (user) => {
    if (user === null) {
      console.log('Firebase está conectado');
    } else {
      console.log('Firebase no está conectado');
    }
  });
};

checkFirebaseConnection();

export default function App() {
  return (
    <View style={ {marginTop: Constants.statusBarHeight, flexGrow: 1,justifyContent: 'center' }}>
      <Login />
      
    </View>
  );
}

