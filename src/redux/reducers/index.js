import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import loginReducer from "./loginReducer";
import AuthReducer from "./registrationReducer";
import tokenReducer from "./tokensReducers";
import userReducer from "./userReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  auth: AuthReducer,
  login: loginReducer,
  token: tokenReducer,
  user: userReducer
});

export default persistReducer(persistConfig, rootReducer)