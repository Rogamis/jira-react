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
    <div>
      <button onClick={props.logOut} className="btn">LogOut</button>
      <div className="user-content">
        <div className="user-block">
          <div className="user-info"></div>
          <div className="avatar"></div>
        </div>
      </div>
      <div className="project-content"></div>
      <div className="task-content"></div>
    </div>
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