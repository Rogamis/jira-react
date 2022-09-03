import React, { useEffect } from 'react'
import {fetchUserInfo} from "../redux/actions/userAction"
import { logOut } from '../redux/actions/loginAction';
import "../App.css"
import { connect } from "react-redux";

function UserPage(props) {
  console.log("props", props);

  useEffect(() => {
    props.fetchUserInfo()
  }, [])

  return (
    <body>
      <div class="wrapper">
        <div class="left">
          <img
            className="photo"
            alt="user"
            width="100"
            src={
              "https://random.imagecdn.app/500/500"
            }
          ></img>
          <h4>Welcome {props.username}</h4>
          <p>Role: {props.userrole}</p>
          <button className="btn" onClick={props.logOut}>
            logOut
          </button>
        </div>
        <div class="right">
          <div class="info">
            <h3>Information</h3>
            <div class="info_data">
              <div class="data">
                <h4>Email</h4>
                <p>{props.email}</p>
                <h4>ID: {props.userid}</h4>
              </div>
            </div>
          </div>

          <div class="projects">
            <h3>Projects you have created</h3>
            <div class="projects_data">
              <div class="data">
                <button className="btn-project">Create new project</button>
                <h4>Recent</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <h4>Recent</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div class="data">
                <h4>My project</h4>
                <p>dolor sit amet.</p>
              </div>
            </div>
          </div>

          <div class="projects">
            <h3>Invited projects </h3>
            <div class="projects_data">
              <div class="data">
                <h4>My project</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <h4>Recent</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div class="data">
                <h4>My project</h4>
                <p>dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div class="social_media"></div>
        </div>
      </div>
    </body>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    userid: state.user.userid,
    userrole: state.user.userrole,
    email: state.user.email,
    avatar: state.user.avatar
  }
}
const mapDispatchToProps = {
  fetchUserInfo,
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)