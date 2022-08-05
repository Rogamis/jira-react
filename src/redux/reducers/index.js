import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import AuthReducer from "./registrationReducer";
import tokenReducer from "./tokensReducers";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  login: loginReducer,
  token: tokenReducer
});
