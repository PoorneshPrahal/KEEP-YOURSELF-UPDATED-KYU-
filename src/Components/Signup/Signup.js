import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import '../Login/Login.css'
import {auth,firestore} from '../../firebase'
import { collection,addDoc } from 'firebase/firestore';
import signin from '../../images/login.png'
import google from '../../images/google.png'


function Signup() {
  const [name, setname] = useState();
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const favs = [];
  const userRef = collection(firestore, "UsersDatas");

  const saveUserInfoTofirestore = async (id, name, email, favs) => {
    await addDoc(userRef, { id: id, name: name, username: email, favs: favs });
  };

  const signup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        username,
        password
      );
      const userId = userCredential.user.uid;

      await saveUserInfoTofirestore(userId, name, username, favs);
      console.log("Success");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form className="form">
          <h3>
            Ready to Dive In?{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #C33764, #1D2671)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Sign Up!
            </span>
          </h3>
          <label>UserName </label>
          <input
            type="text"
            placeholder="Who are you today?"
            className="inpt-user"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <label>Email </label>
          <input
            type="text"
            placeholder="Email for magic codes"
            className="inpt-user"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Shhh...your password"
            className="inpt-pwd"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button
            className="btn-log"
            onClick={(e) => {
              signup(e);
            }}
          >
            SignUp
          </button>
          <p className="login-text">or continue with</p>
          <button className="btn-log btn-google">
            {" "}
            <img src={google} height={33} />
            Sign up with Google{" "}
          </button>
          <p className="login-text">
            One among us? <a href="#">Log in!</a>
          </p>
        </form>
      </div>
      <div className="login-image">
        <img src={signin} height={520} width={550} alt="Sign In" />

        <div className="right-bar"></div>
      </div>
    </div>
  );
}

export default Signup;
