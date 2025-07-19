// @ts-nocheck
import { StrictMode } from "react";
import App from "./App.jsx";
import React from "react";
import { createRoot } from "react-dom/client";
{
  /* Bootstrap link:The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Provider } from "react-redux";
import store from "./app/store.jsx";
// import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
