import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { setEmailLogin, setPassword, login } from "../redux/actions/loginAction"

function LoginPage(props) {
  console.log(props);

  const handleSubmit = () => {
    props.login();
  };

  const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            props.setEmailLogin(value);
        }
        if(id === "password"){
            props.setPassword(value);
        }
    }

  return (
    <div class="box">
      <form>
        <span class="text-center">Login</span>
          <div class="input-container">
            <input value={props.email} id="email" type="text" required="" onChange={(e) => {handleInputChange(e)}}/>
            <label>Email</label>
          </div>
          <div class="input-container">
            <input value={props.password} id="password" type="mail" required="" onChange={(e) => {handleInputChange(e)}} />
            <label>Password</label>
          </div>
        <button onClick={()=> {handleSubmit()}} type="button" class="btn">
          WELCOME
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    password: state.login.password,
  };
};

const mapDispatchToProps = {
  setEmailLogin,
  setPassword,
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);