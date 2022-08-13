import axiosInstance from "../../axios";
import {setAccessToken, setRefreshToken} from '../actions/tokensAction'
export const SET_EMAIL_LOGIN = "LOGIN::SET_EMAIL_LOGIN";
export const SET_PASSWORD_LOGIN = "LOGIN::SET_PASSWORD_LOGIN";
export const SET_TOKEN = "LOGIN::SET_TOKEN";

export const setEmailLogin = (email) => ({
    type: SET_EMAIL_LOGIN,
    payload: email,
});

export const setPassword = (password) => ({
    type: SET_PASSWORD_LOGIN,
    payload: password,
});

export const setToken = (token) => ({
    type: SET_TOKEN,
    payload: token,
});

export const login = (callback) => async (dispatch, getState) => {
  try {

    const email = getState().login.email;
    const password = getState().login.password;

    const answer = await axiosInstance.post("/login", {
      email: email,
      password: password,
    })
    console.log(answer.data)
    if (answer.data.access_token) {
      dispatch(setAccessToken(answer.data.access_token))
      dispatch(setRefreshToken(answer.data.refresh_token));
      if(callback){
        callback()
      }
    }
  } catch (e) {
    console.log("login", e.response.data);
  }
};

export const logOut = () => async (dispatch, getState) => {
  try{
    dispatch(setAccessToken(null))
    dispatch(setRefreshToken(null))
  } catch (e) {
    console.log(logOut)
  }
}