import axiosInstance from "../../axios";
export const SET_USER = "AUTH::SET_LOGIN_WITHOUT_AVATAR";
export const SET_PASSWORD = "AUTH::SET_PASSWORD";
export const SET_EMAIL = "AUTH::SET_EMAIL"

export const registration = () => async (dispatch, getState) => {
    try {
        const email = getState().auth.email;
        const password = getState().auth.password;
        const user = getState().auth.user;
        const answer = await axiosInstance.post("/registration", {
          email: email,
          password: password,
          username: user,
          role: "ADMIN",
        });
        console.log(answer.data) 
    } catch(e){
        console.log ("registration", e.response.data);
        alert("This user already exists");
    }
}

export const setUser = (data) => {
  return {
    type: SET_USER,
    payload: data,
  };
};

export const setPassword = (data) => {
  return {
    type: SET_PASSWORD,
    payload: data,
  };
};

export const setEmail = (data) => {
  return {
    type: SET_EMAIL,
    payload: data,
  };
};