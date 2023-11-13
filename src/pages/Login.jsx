import PropTypes from 'prop-types'; // Import prop-types module
import { useState } from "react";
import "../style.css";
import icon from "../assets/icon.png"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";





const Login = ({ onLogin }) => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  const navigate = useNavigate(); // Corregir aquí

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Inicio de sesión exitoso
        const user = userCredential.user;
        console.log("ta");
        navigate("/"); // Navegar a la ruta principal
        onLogin(); // Actualizar el estado del usuario
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div>
      
      <form onSubmit={handleLogin} className="container">
      <img src={icon} alt="Icon" className='Img'/>
        <input
          id="email"
          className="input mail"
          type="email"
          placeholder="Correo"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          id="password"
          className="input"
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="button" type="submit">
          Iniciar Sesión
        </button>

        <button onClick={(e) => handleGoogle(e)} className="button">
          Google
        </button>

        {error && <span>La contraseña o el correo son incorrectos</span>}
      </form>
    </div>
  );
};

export default Login;
