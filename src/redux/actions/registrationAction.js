import axiosInstance from "../../axios";
export const SET_USER = "REGIST::SET_LOGIN_WITHOUT_AVATAR";
export const SET_PASSWORD = "REGIST::SET_PASSWORD";
export const SET_EMAIL = "REGIST::SET_EMAIL";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const setPassword = (password) => {
  return {
    type: SET_PASSWORD,
    payload: password,
  };
};

export const setEmail = (email) => {
  return {
    type: SET_EMAIL,
    payload: email,
  };
};

export const registration = () => async (dispatch, getState) => {
  try {
    const email = getState().regist.email;
    const password = getState().regist.password;
    const user = getState().regist.user;

    const answer = await axiosInstance.post("/registration", {
      email: email,
      password: password,
      username: user,
      role: "ADMIN",
    });
    console.log(answer.data);
    alert(`Welcome ${answer.data.username} to Jira pet project! Now you need to login: please follow to Login Page `)
  } catch (e) {
    console.log("registration", e.response.data);
    alert("User with this email already exists.");
  }
};