import React, { useState } from 'react';
import Constants from 'expo-constants'; //importo para utilizar el margin predefinido para no colicinar con la barra superior
import { View, TextInput, Button } from 'react-native';

import Login from "./src/components/Login";
import Buenas from "./src/components/screens/Buenas"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { app } from './firebase'; // Ruta correcta al archivo firebase.js
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(app);

const checkFirebaseConnection = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user);
  });
};

checkFirebaseConnection();

const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Realiza la lógica de validación e inicio de sesión aquí
    // ...

    // Si el inicio de sesión es exitoso, navega a la pantalla principal
    navigation.navigate('Buenas');
  };

  return (
    <View>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Buenas" component={Buenas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// import React from "react";
// import Constants from 'expo-constants'; //importo para utilizar el margin predefinido para no colicinar con la barra superior
// import { View } from 'react-native';

// import Login from "./src/components/Login";
// import Buenas from "./src/components/screens"

// import { app } from './firebase'; // Ruta correcta al archivo firebase.js
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// const auth = getAuth(app);

// const checkFirebaseConnection = () => {
//   onAuthStateChanged(auth, (user) => {
//     console.log(user);
//   });
// };

// checkFirebaseConnection();

// export default function App() {
//   return (
//     <View style={ {marginTop: Constants.statusBarHeight, flexGrow: 1,justifyContent: 'center', textAlign: 'center'}}>
//       <Login />
      
//     </View>
//   );
// }

/* ESTA ES LA FUNCIONAEL PARA PROBAR */


// import React, { useState } from 'react';
// import { View, TextInput, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// const HomeScreen = () => (
//   <View>
//     {/* Contenido de la pantalla principal */}
//   </View>
// );

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Realiza la lógica de validación e inicio de sesión aquí
//     // ...

//     // Si el inicio de sesión es exitoso, navega a la pantalla principal
//     navigation.navigate('Home');
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Correo electrónico"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         placeholder="Contraseña"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Iniciar sesión" onPress={handleLogin} />
//     </View>
//   );
// };

// const App = () => (
//   <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Home" component={HomeScreen} />
//     </Stack.Navigator>
//   </NavigationContainer>
// );

// export default App;


