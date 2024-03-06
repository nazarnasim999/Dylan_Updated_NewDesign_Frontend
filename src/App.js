import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import RouterApp from "./config/Routers/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <Provider store={store}>
      <RouterApp />
    </Provider>
  );
};

export default App;
