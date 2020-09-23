import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";

if (process.env.NODE_ENV === "development") {
  require("./server/msw");
}

// const getGroceryList = async () => {
//   try {
//     const response = await fetch("http://localhost:3001/grocery-list");
//     const data = await response.json();
//     console.log(data);
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// getGroceryList();

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
