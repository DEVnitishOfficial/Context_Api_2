import { useContext, useState } from "react"
import UserContext from "../context/UserContext"
function Login() {
    const [userNamee, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userNamee,password})

    }
  return (
    <div>
        <h2>Login</h2>
        <input
         type="text"
         placeholder="Username" 
         value={userNamee} 
         onChange={(e) => setUserName(e.target.value)}/>
        <input 
        type="text" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password" />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login