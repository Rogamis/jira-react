import React from 'react';
import { connect } from 'react-redux';
import './style.css'
import {setEmail, setPassword, setUser, setAvatar ,registration} from "../redux/actions/registrationAction"

function RegistrationForm(props) {
    const [dragActive, setDragActive] = React.useState(false);
    const inputRef = React.useRef(null);
    function handleFile(files) {
      console.log(files);
        alert(
          "You drop photo. If you have completed all fields. Please click Register "
        );
    }

    const handleDrag = function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };

    const handleDrop = function (e) {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files);
      }
    };

    const onButtonClick = () => {
      inputRef.current.click();
    };

    const handleSubmit  = () => {
        props.registration()
    }

    const changeHandler = (event) => {
    console.log(event.target.files[0])
    props.setAvatar(event.target.files[0]);
    };

   const handleInputChange = (e) => {
     const { id, value } = e.target;
     if (id === "lastName") {
       props.setUser(value);
     }
     if (id === "email") {
       props.setEmail(value);
     }
     if (id === "password") {
       props.setPassword(value);
     }
   };
    
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
                <label>Choose a file if you want registration with avatar. Or drag it</label>
            </div>
          <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
      <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={changeHandler} />
      <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
        <div>
          <p>Drop your photo here or</p>
          <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
        </div> 
      </label>
      { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
    </form>
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
  setAvatar,
  registration
};

export default connect (mapStateToProps, mapDispatchToProps)(RegistrationForm)