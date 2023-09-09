import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/components/Login"

const Stack = createNativeStackNavigator();



export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}


/*import React from "react";

//import Constants from 'expo-constants'; //importo para utilizar el margin predefinido para no colicinar con la barra superior
import { View, StatusBar } from 'react-native'
import { Route } from "react-router-native";

import Login from "./src/components/Login.jsx";
import Login2 from "./src/components/Login2.jsx";

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
    <View style={ { flexGrow: 1,}}>//justifyContent: 'center', textAlign: 'center',
    <StatusBar backgroundColor="#2A6F97" barStyle="default" />
    <Login2 />  
  </View>
  
);
}
*/