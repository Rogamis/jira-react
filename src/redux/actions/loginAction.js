import axiosInstance from "../../axios";
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

export const login = () => async (dispatch, getState) => {
  try {

    const email = getState().login.email;
    const password = getState().login.password;

    const answer = await axiosInstance.post("/login", {
      email: email,
      password: password,
    })
    console.log(answer.data)
    if (answer.data.access_token) {
      dispatch(setToken(answer.data.access_token));
    }
  } catch (e) {
    console.log("login", e.response.data);
  }
};