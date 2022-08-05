import { SET_ACCESS_TOKEN, SET_REFRESH_TOKEN } from "../actions/tokensAction"

const initialState = {
  access_token : null,
  refresh_token: null,
};

const tokenReducer = (state = initialState, action) => {
    console.log("ASDASDASD",action)
  switch (action.type) {

    case SET_ACCESS_TOKEN:
      return {
        ...state,
        access_token: action.payload,
      };

    case SET_REFRESH_TOKEN:
      return {
        ...state,
        refresh_token: action.payload,
      };

    default:
      return state;
  }
};

export default tokenReducer