import { NavLink } from "react-router-dom"
import ChangeName from "../components/ChangeName"
import ChangePassword from "../components/ChangePassword"

const User = () => {
  return (
    <div>
        User
        <ChangePassword/>
        <ChangeName/>
        <NavLink to="/"><button >Home</button></NavLink>
    </div>
    
  )
}

export default User