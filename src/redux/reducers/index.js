import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

export const rootReducer = combineReducers({
  auth: AuthReducer,
});
