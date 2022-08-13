import axiosInstance from "../../axios"

export const SET_USERNAME = "USER::SET_USERNAME"
export const SET_USER_ID = "USER::SET_USER_ID"
export const SET_USER_ROLE = "USER:SET_USER_ROLE"
export const SET_AVATAR = "USER::SET_AVATAR"
export const SET_EMAIL = "USER::SET_EMAIL"

export const setUsername = (data) => {
    return {
        type: SET_USERNAME,
        payload: data
    }
}

export const setUserId = (userid) => {
    return {
      type: SET_USER_ID,
      payload: userid,
    };
}

export const setUserRole = (userrole) => {
    return {
      type: SET_USER_ROLE,
      payload: userrole,
    };
}

export const setAvatar = (avatar) => {
  return {
    type: SET_AVATAR,
    payload: avatar
  }
}

export const setEmail = (email) =>{
  return {
    type: SET_EMAIL,
    payload: email
  }
}

export const fetchUserInfo = () => async (dispatch, getState) => {
  try {
    const answer = await axiosInstance.get("/users/me")
    dispatch(setUserId(answer.data.id))
    dispatch(setAvatar(answer.data.avatar));
    dispatch(setUserRole(answer.data.role));
    dispatch(setEmail(answer.data.email));
    dispatch(setUsername(answer.data.username));
    console.log("user info",answer.data);
  } catch (e) {
    console.log("user", e.response.data);
  }
};