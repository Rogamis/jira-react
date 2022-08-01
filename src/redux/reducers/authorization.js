import { SET_LOGIN_WITHOUT_AVATAR, SET_PASSWORD } from "../actions/logInAction";

const initialState = {
  login: "",
  password: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_WITHOUT_AVATAR:
      return {
        ...state,
        login: action.payload,
      };

    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
