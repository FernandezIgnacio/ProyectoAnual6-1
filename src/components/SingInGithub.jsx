import * as React from "react";
import * as WebBrowser from 'expo-web-browser';
import * as Google from "expo-auth-session/providers/google";

import { TouchableOpacity, Text, StyleSheet,View,Image } from 'react-native';
import { useEffect } from "react";

WebBrowser.maybeCompleteAuthSession();



const SingInGithub = () => {
  const[accessToken,setAccessToken]= React.useState(null);
  const[user,setUser]= React.useState(null);
  const[request,response, promtAsync]= Google.useIdTokenAuthRequest({
    clientId:"545982934201-0eibv34fgcpvi43h07j0ei165676altf.apps.googleusercontent.com",
    androidClientId:"545982934201-f1ctpgpr2k8drjtaco3bo81545f2t3vq.apps.googleusercontent.com",
  });

  React.useEffect(() =>{
    if(response?.type === "success"){
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo();
    }
  },[response, accessToken])

  async function fetchUserInfo(){
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me",{
      headers:{Authorizattion:`Bearer ${accessToken}`}
    });
    const useInfo = await response.json();
    setUser(useInfo);
  }

  const ShowUserInfo = () => {
    if (user){
      return(
        <View style={styles.container}>
          <Text>hola</Text>
        </View>
      )
    }
  }
  return (
    <View style={styles.container}>
      {user && <ShowUserInfo />}
      {user === null &&
      <TouchableOpacity style={styles.opacity} disabled={!request} onPress={promtAsync}>
        <Image source={require('../../assets/images/githubIcon.png')} style={ styles.Img }/>
      </TouchableOpacity>
      }
    </View>
  );
};


const styles = StyleSheet.create({  
  button: {
    backgroundColor: '#012A4A',
    marginTop:50,
    paddingVertical: 15, 
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  opacity:{
    backgroundColor: '#012A4A',
    marginTop:50,
    paddingVertical: 15, 
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  Img: {
    width: 40, 
    height: 40,
  },
});

export default SingInGithub;


/*
import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const SingInGoogle = () => {
  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://expo.dev');
    setResult(result);
  };
  return (
    <View style={styles.container}>
      <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
      <Text>{result && JSON.stringify(result)}</Text>
    </View>
  );
};


const styles = StyleSheet.create({  
  button: {
    backgroundColor: '#012A4A',
    marginTop:50,
    paddingVertical: 15, 
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});

export default SingInGoogle;*/