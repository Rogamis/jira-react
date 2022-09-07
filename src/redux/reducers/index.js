import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import loginReducer from "./loginReducer";
import tokenReducer from "./tokensReducers";
import userReducer from "./userReducer";
import storage from "redux-persist/lib/storage";
import registReducer from "./registrationReducer";
import projectsReducer from "./projectsReducer";
import selectedProjectReducer from "./selectedProject";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["token", "selectedProject"],
};

const rootReducer = combineReducers({
  regist: registReducer,
  login: loginReducer,
  token: tokenReducer,
  user: userReducer,
  projects: projectsReducer,
  selectedProject: selectedProjectReducer,
});

export default persistReducer(persistConfig, rootReducer)