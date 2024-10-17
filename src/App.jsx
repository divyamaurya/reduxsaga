// src/App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import UserLists from "./components/UserLists";

function App() {
  return (
    <Provider store={store}>
      <UserLists />
    </Provider>
  );
}

export default App;
