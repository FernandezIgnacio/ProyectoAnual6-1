import PropTypes from 'prop-types'; // Import prop-types module
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';

function App() {
  const currentUser = false;

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  // Add prop validation for RequireAuth component
  RequireAuth.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
