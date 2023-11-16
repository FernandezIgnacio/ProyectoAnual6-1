import PropTypes from 'prop-types'; // Import prop-types module
import { useEffect, useState } from "react";
import "../style.css";
import icon from "../assets/icon.png"
import {  signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, githubProvider, googleProvider } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value,setValue] = useState("");
  const [loading, setLoading] = useState(false);   
  const [gloading, setGloading] = useState(false);

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
        alert(error);
      });
  };

  const handleGoogle = async () =>{
    setGloading(true);
    try {
      await signInWithPopup(auth,googleProvider);
      navigate("/"); // Navegar a la ruta principal
      onLogin(); // Actualizar el estado del usuario
    } catch (error) {    
      alert(error);
    } finally {       
      setGloading(false);     
    } 
    
  }

  const handleGithub = async () => {     
    setLoading(true);  
    try {
      await signInWithPopup(auth, githubProvider); 
      navigate('/'); // Redirige al usuario a la ruta raíz 
      onLogin(); // Actualizar el estado del usuario   
    } catch (error) {       
      alert(error);
    } finally {
      setLoading(false);     
    }   
  };    


  useEffect(()=>{
      setValue(localStorage.getItem('email'))
  }, [])

  return (
    <div>
      
      <form onSubmit={handleLogin} className="container">
      <img src={icon} alt="Icon" className='Img'/>
        Inicio de sesion
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
        {error && <span>La contraseña o el correo son incorrectos</span>}

        <button className="button login" type="submit">
          Iniciar
        </button>
        
        <NavLink to="/register"><button className='extrabutton'>Crear cuenta</button></NavLink>

        <div className="social">
          <button className="google" onClick={handleGoogle} disabled={gloading}>
            {gloading ? "Cargando" : ""} 
          </button>
          <button className="github" onClick={handleGithub} disabled={loading}>       
            {loading ? "Cargando" : ""}    
          </button> 
        </div>

      </form>
    </div>
  );
};

export default Login;
