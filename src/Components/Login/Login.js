import React, { useState } from 'react'
import './Login.css'
import {auth} from '../../firebase'

import { signInWithEmailAndPassword } from 'firebase/auth'


function Login() {   

  const [username,setusername] = useState()
  const[password,setpassword] = useState()

  const login = async(e) => {

    e.preventDefault()
    try{
      await signInWithEmailAndPassword(auth,username,password).then((e)=>{
        console.log(e)
        console.log("verfied")
      })
    }catch(e){

      alert("Wring")

    }
    


  }
  return (
    <div className='cont-log'>
        <form className='form'>
            <label>UserName  </label>
            <input type='text' className='inpt-user' onChange={(e)=>{setusername(e.target.value)}}/>

            <label>Password  </label>
            <input type='password' className='inpt-pwd' onChange={(e)=>{setpassword(e.target.value)}}/>
            <button className='btn-log' onClick={(e)=>{login(e)}}>LOGIN</button>
            <h5 className='h1-or'>or</h5>
            <button className='btn-log'>SignUp</button>
        </form>

    </div>
  )
}

export default Login