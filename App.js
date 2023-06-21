import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import login from './components/login/login.jsx';

const App = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={Login} />
    </NativeRouter>
  );
}

export default App;
