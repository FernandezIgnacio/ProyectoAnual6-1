import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import Login from './components/login/Login.jsx';

const App = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={Login} />
    </NativeRouter>
  );
}

export default App;
