import React from "react";
//import Constants from 'expo-constants'; //importo para utilizar el margin predefinido para no colicinar con la barra superior
import { View, StatusBar } from 'react-native'
import { Route } from "react-router-native";

import Login from "./src/components/Login.jsx";

import { app } from './firebase'; // Ruta correcta al archivo firebase.js
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(app);

const checkFirebaseConnection = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user);
  });
};
 
checkFirebaseConnection();

export default function App() {
  return (
    <View style={ { flexGrow: 1,/*justifyContent: 'center', textAlign: 'center',*/}}>
      <StatusBar backgroundColor="#2A6F97" barStyle="default" />
      <Login />  
    </View>
    
  );
}
