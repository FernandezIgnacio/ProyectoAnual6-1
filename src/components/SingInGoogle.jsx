import React, { useEffect } from 'react';
import { Button } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const SingInGoogle = () => {
  useEffect(() =>{
    GoogleSignin.configure({
      androidClientId:"545982934201-0n4s5qo30akhn2mmgugk6l6o49ecmvpp.apps.googleusercontent.com",
    })
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('Operation is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('Play services not available or outdated');
      } else {
        // some other error happened
        console.log('Some other error happened', error);
      }
    }
  };

  return (
    <>
      <Button title="Sign in with Google" onPress={signIn} />
    </>
  );
};
export default SingInGoogle;