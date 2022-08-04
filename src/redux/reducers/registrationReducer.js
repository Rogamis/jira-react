import { SET_EMAIL, SET_PASSWORD, SET_USER } from "../actions/registrationAction";

const initialState = {
  email: "",
  user: "",
  password: "",
};

const reducer = (state = initialState, action) => {
  console.log(action)
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
        user: action.payload
      }
    default:
      return state;
  }
};

export default reducer;