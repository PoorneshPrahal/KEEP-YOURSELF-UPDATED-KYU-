import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import '../Login/Login.css'
import {auth,db} from '../../firebase'
import { collection,addDoc } from 'firebase/firestore';


function Signup() {


    const [name,setname]  = useState()
    const [username,setusername] = useState()
    const[password,setpassword] = useState()
    const userRef = collection(db,'UsersDatas')



    const saveUserInfoTofirestore = async(id,name,email) => {
        await addDoc(userRef,{id:id,name:name,username:email})
    }




    const signup = async(e) => {
        e.preventDefault()

        try{
            const userCredential = await createUserWithEmailAndPassword(auth,username, password);
             const userId = userCredential.user.uid;

             await saveUserInfoTofirestore(userId,name,username)
             console.log("Success")
        }
       catch(e){

        console.log(e)

       }


    }

  return (
    <div className='cont-log'>
        <form className='form'>
        <label>Name  </label>
            <input type='text' className='inpt-user' onChange={(e)=>{setname(e.target.value)}}/>
            <label>UserName  </label>
            <input type='text' className='inpt-user'onChange={(e)=>{setusername(e.target.value)}}/>
           

            <label>Password  </label>
            <input type='password' className='inpt-pwd' onChange={(e)=>{setpassword(e.target.value)}}/>
            <button className='btn-log' onClick={(e)=>{signup(e)}}>SignUp</button>
        </form>
    </div>
  )
}

export default Signup