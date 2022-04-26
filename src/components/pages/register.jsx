import React from 'react';

export default function Register() {
  return <form className="form-login">
      <h5>Registrar usuario</h5>
      <input className="controls" type="text" name="usuario" value="" placeholder="Usuario"></input>
      <input className="controls" type="password" name="contrasena" value="" auto placeholder="Contraseña"></input>
      <input className="controls" title="Email" type="email" placeholder="Escribe tu Email" span="*" auto="email"></input>
      <input className="buttons" type="submit" name="" value="Ingresar"></input>
      <a href="/Login">Login</a></form>

}