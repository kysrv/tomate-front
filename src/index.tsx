import * as React from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import store from "./Features/Store";
import App from "./App";

// * to win a lot of time
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const rootEl = document.getElementById("root");
const root = createRoot(rootEl as Element);
root.render(
  <BrowserRouter>
    <ToastContainer newestOnTop hideProgressBar />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
