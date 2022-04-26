import React, {useState} from 'react';
import axios from "axios"

export default function Login() {
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const login = event => {
    event.preventDefault()
    axios.post('http://localhost:4010/login', {name: user, password: pass})
    .then(function (response) {
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const handlePass = (event) => {
    setPass(event.target.value)
  }
  const handleUser = (event) => {
    setUser(event.target.value)
  }

return <form className="form-login" onSubmit={login}>
      <h5>Login</h5>
      <input className="controls" type="text" name="usuario" value={user}  onChange={handleUser} placeholder="Usuario"></input>
      <input className="controls" type="password" name="contrasena" value={pass} onChange={handlePass} auto placeholder="Contraseña"></input>
      <input className="buttons" type="submit" name="" value="Ingresar"/>
      <a href="/register">Registrar usuario</a></form>

}