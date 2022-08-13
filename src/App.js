import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import AppContainer from "./AppContainer";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
