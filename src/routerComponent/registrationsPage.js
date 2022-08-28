import React from 'react';
import { connect } from 'react-redux';
import './style.css'
import {setEmail, setPassword, setUser, registration} from "../redux/actions/registrationAction"

function RegistrationForm(props) {
      console.log(props)
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "lastName"){
            props.setUser(value);
        }
        if(id === "email"){
            props.setEmail(value);
        }
        if(id === "password"){
            props.setPassword(value);
        }
    }
    
    const handleSubmit  = () => {
        props.registration()
    }
 
    return(
        <div className="form">
            <div className="form-body">
                <div className="lastname">
                    <label className="form__label" for="lastName"> User name </label>
                    <input  type="text" name="user" id="lastName" value={props.user}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="Nickname ..."/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={props.email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={props.password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
             
    )       
}

const mapStateToProps = (state) => {
  return {
    email: state.regist.email,
    user: state.regist.user,
    password: state.regist.password,
  };
};

const mapDispatchToProps = {
  setEmail,
  setPassword,
  setUser,
  registration
};

export default connect (mapStateToProps, mapDispatchToProps)(RegistrationForm)