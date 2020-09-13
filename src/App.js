import React from "react";
import Routes from "./Routes";
import { Provider } from "react-redux";

//import reduxStore
import ReduxStore from "./store/index";
const App = () => {
  return (
    <Provider store={ReduxStore()}>
      <Routes />
    </Provider>
  );
};

export default App;
