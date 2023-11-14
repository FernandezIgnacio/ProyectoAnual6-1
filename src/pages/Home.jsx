import PropTypes from 'prop-types'; // Import prop-types module
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink } from 'react-router-dom';


const Home = ({ onLogout }) => {
  const handleLogout = () => {
    signOut(auth).then(() => {
      onLogout(); // Actualizar el estado del usuario
    });
  };

  Home.propTypes = {
    onLogout: PropTypes.func.isRequired,
  };
  
  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleLogout}>Logout</button>
      <NavLink to="user" ><button >User</button></NavLink>
      
    </div>
  );
};

export default Home;
