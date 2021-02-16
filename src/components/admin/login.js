import React from 'react'
import useAuth from '../../hooks/useAuth'
import UploadForm from '../uploadForm'

const Login = ({mail,password})=>{
const {user,sesion,setSesion,error}=useAuth(mail,password)
   const Logout = () => {setSesion(false)}
// const LoginForm = document.getElementsByClassName('login-form')
// console.log(LoginForm)

 return(
   <div className="administrator">
    {
       sesion ?
         <div className="login-true">
         <p> Bienvenido {user} </p>
         <UploadForm />
         <button className="button" onClick={Logout}>Salir</button>
         </div>
          :
          <div className="error">{error}</div>
    }

    </div>
 )
}

export default Login