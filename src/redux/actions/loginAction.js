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

export const login = (callback, errorCallback) => async (dispatch, getState) => {
  try {
    console.log("test")
    const email = getState().auth.email;
    const password = getState().auth.password;

    if (!email || !password){
        return
    };

    const answer = await axiosInstance.post("/login", {
      email: email,
      password: password,
    })
    console.log(answer.data)
    if (answer.data.access_token) {
      dispatch(setToken(answer.data.access_token));
      callback();
    }
  } catch (e) {
    console.log("login", e.response.data);
    if (errorCallback) {
        errorCallback("Invalid login attempt")
    }
  }
};