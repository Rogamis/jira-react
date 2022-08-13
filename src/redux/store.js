import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import { persistStore } from "redux-persist";

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export const persistor = persistStore(store);
