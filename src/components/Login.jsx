import "./style.css"

const Login = () =>{
  return (
    <div>
        <form>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password"/>
            <button type="submit">Iniciar Sesion</button>
        </form>
    </div>
  )
}

export default Login
