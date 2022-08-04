import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import AuthReducer from "./registrationReducer";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  login: loginReducer
});
