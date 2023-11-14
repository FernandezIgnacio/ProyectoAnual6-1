import { useEffect, useState } from "react";
import { auth, provider } from "../../firebase.js";
import {signInWithPopup} from "firebase/auth";
import Home from "../pages/Home.jsx"
import { useNavigate } from "react-router-dom";

const LoginGoogle = ({ onLogin }) => {
    const [value,setValue] = useState('')
    const navigate = useNavigate();

    const handleClick =()=>{
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
            <button onClick={handleClick}>Signin With Google</button>
        </div>
    );
}

export default LoginGoogle
