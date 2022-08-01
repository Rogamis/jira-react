export const SET_LOGIN_WITHOUT_AVATAR = "AUTH::SET_LOGIN_WITHOUT_AVATAR";
export const SET_PASSWORD = "AUTH::SET_PASSWORD";

export const setLogin = (data) => {
  return {
    type: SET_LOGIN_WITHOUT_AVATAR,
    payload: data,
  };
};

export const setPassword = (data) => {
  return {
    type: SET_PASSWORD,
    payload: data,
  };
};
