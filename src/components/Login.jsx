import { useState } from "react"
import "./style.css"
import { createUserWithEmailAndPassword } from "firebase/auth"

const Login = () =>{
    
    const handleLogin = (e)=>{
        e.preventDefault()
    }
    

    return (
        <div >
            <form onSubmit={handleLogin} className="container">
                <input className="input mail" type="email" placeholder="Correo" />
                <input className="input" type="password" placeholder="Contraseña"/>
                <button className="button" type="submit">Iniciar Sesion</button>
            </form>
        </div>
    )
}

export default Login
