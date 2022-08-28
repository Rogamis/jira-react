import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { setEmailLogin, setPassword, login } from "../redux/actions/loginAction";
import { setAccessToken, setRefreshToken } from "../redux/actions/tokensAction"
import { useNavigate } from "react-router";

function LoginPage(props) {
  console.log(props);

  const handleSubmit = () => {
    props.login(goUserPage);
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

    const navigate = useNavigate();
    const goUserPage = () => {
        navigate("../user", {replace: true});
    };

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
    accessToken: state.token.access_token,
    refreshToken: state.token.refreshToken,
  };
};

const mapDispatchToProps = {
  setEmailLogin,
  setAccessToken,
  setRefreshToken,
  setPassword,
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);