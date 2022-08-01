import React, { useState } from 'react'
import "../App.css"

function RegistrationsPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailNotValid, setEmailNotValid] = useState(false);
  const [passwordNotValid, setpasswordNotValid] = useState(false);
  const [emailError, setemailError] = useState("Email cannot be empty");
  const [passwordError, setPasswordError] = useState("Password cannot be empty");

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regex.test(String(e.target.value).toLowerCase())) {
      setemailError("Email not valid");
    } else {
      setemailError("");
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length >8) {
      setPasswordError("password must be at least 3 and no more than 8")
        if(!e.target.value) {
          setPasswordError("Password cannot be empty");
        }
    } 
  } 

  const validators = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailNotValid(true)
          break
      case 'password':
        setpasswordNotValid(true);
          break
    }
  }
  return (
    <div class="box">
      <form>
        <span class="text-center">LOGIN</span>
        <div class="input-container">
          {(emailNotValid && emailError) && <div style={{color: 'white'}}>{emailError}</div>}
            <input onChange={e => emailHandler(e)} value={email} onBlur={e=> validators(e)} name='email' type='text' placeholder='Enter your email ...'/>
          {(passwordNotValid && passwordError) && <div style={{color: 'white'}}>{passwordError}</div>}
            <input onChange={e => passwordHandler(e)} value={password} onBlur={e => validators(e)} name='password' type='password' placeholder='Enter password ...'/>
        </div>
        <button class="btn">Login</button>
      </form>
    </div>
  );
}

export default RegistrationsPage