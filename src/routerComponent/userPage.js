import React, { useEffect, useState } from 'react'
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
    <div className='user'>
      <h1>Hello </h1>
      <button onClick={props.logOut}>Log Out</button>
    </div>
  )
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