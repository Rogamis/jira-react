import { SET_EMAIL, SET_PASSWORD, SET_USER, SET_AVATAR } from "../actions/registrationAction";

const initialState = {
  email: "",
  user: "",
  password: "",
  avatar: null
};

const registReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      }
     case SET_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      } 
    default:
      return state;
  }
};

export default registReducer;
