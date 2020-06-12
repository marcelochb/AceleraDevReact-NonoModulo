import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "../../config/ReactotronConfig";
import Routes from "../../routes";

import { store, persistor } from "../../store";
import { Loading } from "../../components";
import "./App.scss";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      {" "}
      <div className="app" data-testid="app">
        <Router>
          <Routes />
        </Router>
      </div>
    </PersistGate>
  </Provider>
);

export default App;
