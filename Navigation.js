import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import Welcome from "./src/Screens/Welcome";
import Login from "./src/Screens/Login";
import Register from "./src/Screens/Register";
import Home from "./src/Screens/Home";


const Stack = createNativeStackNavigator();

function MyStack(){
    return(
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
                <Stack.Screen options={{headerShown: false}} name="Welcome" component={Welcome} />
                <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
                <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default function Navigation(){
    return(
        <MyStack />
    )
}
const MyTheme = {
    colors: {
      background: '#ffffff'
    },
};