import "./style.css"

const Login = () =>{
  return (
    <div className="container">
        <form>
            <input className="input mail" type="email" placeholder="Correo" />
            <input className="input" type="password" placeholder="Contraseña"/>
            <button className="button" type="submit">Iniciar Sesion</button>
        </form>
    </div>
  )
}

export default Login
