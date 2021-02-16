import {useState, useEffect} from 'react';
import {projectAuth} from '../firebase/config';

const AuthFirebase = (mail, password)=>{
  // console.log(mail,password)
  const[user, setUser]=useState('');
  const [error, setError]=useState(null);
  const[sesion, setSesion]=useState(null);


  useEffect(()=>{
     const sigIn =
     projectAuth.signInWithEmailAndPassword(mail,password)
     .then((sigIn)=>{
       setUser(sigIn.user.email)
       setSesion(true)
     })
      .catch((error)=>{
          setError(error.message)
      })
     return() =>sigIn;
},[mail,password])
return{user,sesion,error,setSesion}
}

export default AuthFirebase;