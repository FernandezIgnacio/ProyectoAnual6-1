import PropTypes from 'prop-types'; // Import prop-types module
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import { useState } from 'react';
import User from './pages/User.jsx';
import Register from './pages/Register.jsx';

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  
  const handleLogin = () => {
    setCurrentUser(true);
  };
  const handleLogout = () => {
    setCurrentUser(false);
  };
  
  RequireAuth.propTypes = {
    children: PropTypes.node,
  };
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <RequireAuth>
                  <Home onLogout={handleLogout} />
                </RequireAuth>
              }
            />
            <Route
              path="user"
              element={
                <User />
              }
            />
            
            <Route path="login" element={<Login onLogin={handleLogin} />} />
            <Route path="register" element={<Register/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
