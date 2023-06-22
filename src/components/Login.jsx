import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const Login = () =>{
    
    const [text, onChangeText] = React.useState('');

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Email"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});



export default Login