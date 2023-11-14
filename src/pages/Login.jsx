import PropTypes from 'prop-types'; // Import prop-types module
import { useEffect, useState } from "react";
import "../style.css";
import icon from "../assets/icon.png"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";


const Login = ({ onLogin }) => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value,setValue] = useState('')

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

  const handleGoogle =()=>{
    signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email)
        navigate("/"); // Navegar a la ruta principal
        onLogin(); // Actualizar el estado del usuario
    })
  }

  useEffect(()=>{
      setValue(localStorage.getItem('email'))
  })

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
        {error && <span>La contraseña o el correo son incorrectos</span>}
        <button className="button" onClick={handleGoogle}>Google</button>
      </form>
    </div>
  );
};

export default Login;
