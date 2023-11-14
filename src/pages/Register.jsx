import { useEffect, useState } from "react";
import "../style.css";
import icon from "../assets/icon.png"
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth} from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value,setValue] = useState("");

  const navigate = useNavigate(); // Corregir aquí

  const handleLogin = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Inicio de sesión exitoso
        const user = userCredential.user;
        console.log("ta");
        alert("Se creo la cuenta correctamente");
        navigate("/login"); // Navegar a la ruta principal
      })
      .catch((error) => {
        alert(error);
      })
      
  };


  useEffect(()=>{
      setValue(localStorage.getItem('email'))
  }, [])

  return (
    <div>
      
      <form onSubmit={handleLogin} className="container">
      <img src={icon} alt="Icon" className='Img'/>
        Register
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

        <button className="button login" type="submit">
          Crear
        </button>
        
        <NavLink to="/login"><button className="extrabutton">Iniciar sesion</button></NavLink>
      </form>
    </div>
  );
};
export default Register