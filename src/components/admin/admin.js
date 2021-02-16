import React,{useState} from 'react';
import Login from '../admin/login'

const Admin = ()=>{
  const [mail, setMail]=useState('')
  const [password, setPassword] =useState('')
  const [error, setError]=useState(null)
  const [login, setLogin]=useState(null)

  const changeSubmit = (e)=>{
    e.preventDefault()
    // console.log(mail,password)
    if(mail===''){
      setError('campo email')
    }else if(password===''){
      setError('campo password')
    } else{
      // console.log('hay usuario y contrase;a')
      setError(null)
      setLogin('true')
      // setMail('')
      // setPassword('')
      document.getElementById('email').value=''
      document.getElementById('password').value=''
    }
  }

  return(

    <div className="login">
      <div className="login-box">

      {
        // !user.data &&
        <div className="login-form">
          <h2>Bienvenido administrador</h2>
          <form>
        <div className="user-box">
          <label htmlFor="email">Email </label>
          <input type="email" name="email" id="email"
            placeholder="Acá tu correo"
            required
            autoComplete="email"
            onChange={(ev) => setMail(ev.target.value)}
            />
            </div>
          <br></br>
        <div className="user-box">

          <label htmlFor="password">Contraseña: </label>
          <input type="password" name="password" id="password"
            autoComplete="current-password"
            placeholder="Acá tu clave"
            required
            onChange={(ev) => setPassword(ev.target.value)}
            />
        </div>
          {/* <button>ENTRAR</button> */}
          <input type="submit" value="Entrar" id="entrar" className='button'
           onClick={changeSubmit}
           /> <br />
           {/* <a href="">Enviar</a> */}
          {/* <button>Crear cuenta</button> */}
            {
              error && <div className="error">{error}</div>
            }
           </form>

           {
             login && <Login mail={mail} password={password}/>
            }
        </div>

}
</div>
      {/* <button on onClick={salir}>
        Salir
      </button> */}
      </div>

  );
}

export default Admin;
